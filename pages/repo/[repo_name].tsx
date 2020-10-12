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
        <h3>{repo.description}</h3>
        {lang.map((lang) => (
          <h3>
            <div
              style={{
                backgroundColor: "#f5f5",
                minWidth: "fit-content",
                width: Math.round((lang[1] / sum) * 100) * 5,
                display: "inline-block",
              }}
            >
              {Math.round((lang[1] / sum) * 100)}%
            </div>
            | {lang[0]}
          </h3>
        ))}
        <GlobalStyles />
      </>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repoList = await api.get("/users/procarrera/repos?per_page=100");

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
    `https://api.github.com/repos/procarrera/${repo_name}/languages`
  );

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
