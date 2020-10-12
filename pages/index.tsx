import { GetStaticProps } from "next";
import Head from "next/head";
import Content from "../src/components/Content";

import { GlobalStyles } from "../src/styles/GlobalStyles";

export const getStaticProps: GetStaticProps = async () => {
  const resonse = await fetch(
    "https://api.github.com/users/procarrera/repos?per_page=100"
  );
  const data = await resonse.json()

  return {
    props: {
      repoList: data,
    },
    revalidate: 1,
  }
}

export default function Home({repoList}) {
  return (
    <>
      <Head>
        <title>Um Título para Página</title>
      </Head>
      <Content repoList={repoList}/>
      <GlobalStyles />
    </>
  );
};