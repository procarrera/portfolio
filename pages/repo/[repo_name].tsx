import { GetStaticProps, GetStaticPaths } from "next";
import api from "../api/github";

import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";

import GlobalStyles from "../../src/styles/GlobalStyles";

import Repository from "../../src/pages/Repository";

export default function RepoPage({ repo, lang, sum }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  if (repo.message === "Not Found") {
    return <DefaultErrorPage statusCode={404} />;
  } else {
    return (
      <>
        <Repository repo={repo} lang={lang} sum={sum} />
        <GlobalStyles locked={false} />
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

  const repoTags = await api.get(`/repos/procarrera/${repo_name}/topics`);

  const lang: Array<[string, number]> = Object.entries(repoLanguages.data);
  const sum = lang.reduce((acc, [, value]) => acc + value, 0);

  if (repoDetails.data.message) {
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
