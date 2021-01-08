import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import api from "./api/github";

import GlobalStyle from "../src/styles/GlobalStyles";

import Homepage from "../src/pages/Homepage";
import Footer from "../src/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(
    "/users/procarrera/repos?per_page=1000&sort=update"
  );

  return {
    props: {
      repoList: response.data,
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
        <title>Pedro Carrera - Developer</title>
      </Head>
      <GlobalStyle locked={locked} />
      <Homepage repoList={repoList} shouldLock={shouldLock} />
      <Footer />

      {/* <Content repoList={repoList} /> */}
    </>
  );
}
