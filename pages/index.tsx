import { GetStaticProps } from "next";
import Head from "next/head";
import Content from "../src/components/Content";
import api from "./api/github";

import { GlobalStyles } from "../src/styles/GlobalStyles";

export const getStaticProps: GetStaticProps = async () => {
  const repoList = await api.get("/users/procarrera/repos?per_page=1000")

  return {
    props: {
      repoList: repoList.data,
    },
    revalidate: 1,
  }
}

export default function Home({repoList}) {
  return (
    <>
      <Head>
        <title>Meu Portfolio</title>
      </Head>
      <Content repoList={repoList}/>
      <GlobalStyles />
    </>
  );
};