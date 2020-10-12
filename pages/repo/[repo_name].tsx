import { GetStaticProps, GetStaticPaths } from "next";

import api from "../api/github";

import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import { GlobalStyles } from "../../src/styles/GlobalStyles";

export default function RepoPage({ repo, lang, sum }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  if (repo.message === "Not Found") {
    console.log("CAIU AQUI");
    console.log(repo);
    return <DefaultErrorPage statusCode={404} />;
  } else {
    return (
      <>
        <Head>
          <title>{repo.name}</title>
        </Head>
        <h1>{repo.name}</h1>
        <h3 style={{marginBottom:"8px"}}>{repo.description}</h3>
        {lang.map((lang) => (
          <div  key={lang[1]} style={{ marginBottom: "8px", display:"flex", flexDirection:"row", alignItems: "center"}}>
            <div
              style={{
                backgroundColor: "#f5f5",
                borderRadius: "8px",
                minWidth: "fit-content",
                width: Math.round((lang[1] / sum) * 100) * 3,
                display: "inline-block",
                padding:"4px 6px"
              }}
            >
             <h3> {Math.round((lang[1] / sum) * 100)}% </h3>
            </div>
            <h3>| {lang[0]}</h3>
          </div>
        ))}
        <GlobalStyles />
      </>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repoList = await api.get("/users/procarrera/repos?per_page=1000");

  const paths = repoList.data.map((repo) => {
    return { params: { repo_name: repo.name } };
  });

  return {
    paths, // pode ser vazio e as páginas estáticas vao sendo geradas conforme forem acessadas
    fallback: true, // TRUE tenta gerar uma página que ainda nao foi gerada,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { repo_name } = context.params;

  const repoDetails = await api.get(`/repos/procarrera/${repo_name}`);

  const repoLanguages = await api.get(
    `/repos/procarrera/${repo_name}/languages`
  );

  const repoTags = await api.get(
    `/repos/procarrera/${repo_name}/topics`
  )

  const lang: Array<[string, number]> = Object.entries(repoLanguages.data);
  const sum = lang.reduce((acc, [, value]) => acc + value, 0);
  console.log(sum);

  if (repoDetails.data.message) {
    console.log("Data Message ", repoDetails.data);
    return {
      props: {
        repo: repoDetails.data,
        lang,
        sum,
      },
      revalidate: 500,
    };
  }

  return {
    props: {
      repo: repoDetails.data,
      lang,
      sum,
    },
    revalidate: 500,
  };
};
