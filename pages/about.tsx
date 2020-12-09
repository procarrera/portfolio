import { GetStaticProps } from "next";
import Head from "next/head";
import api from "./api/github";

import Homepage from "../src/pages/Homepage"

export default function Home({ repoList }) {
 
  return (
    <>
      <Head>
        <title>Meu Portfolio - About</title>
      </Head>
    </>
  );
}
