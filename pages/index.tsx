import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import api from "./api/github";

import GlobalStyle from "../src/styles/GlobalStyles";

import Homepage from "../src/pages/Homepage";
import Footer from "../src/components/Footer"

export const getStaticProps: GetStaticProps = async () => {
  const repoList = await api.get("/users/procarrera/repos?per_page=1000");
  console.log('Called API on getStaticProps')
  return {
    props: {
      repoList: repoList.data,
    },
    revalidate: 1,
  };
};

export default function Home({ repoList }) {
  const [locked, setLocked] = useState(true);

  function shouldLock(lock: string) {
    if (lock === "home") {
      setLocked(true);
    } else {
      setLocked(false);
    }
  }

  return (
    <>
      <Head>
        <title>Meu Portfolio</title>
      </Head>
      <GlobalStyle locked={locked} />
      <Homepage repoList={repoList} shouldLock={shouldLock} />
      <Footer />

      {/* <Content repoList={repoList} /> */}
    </>
  );
}
