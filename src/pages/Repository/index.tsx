import Head from "next/head";
import React from "react";

interface RepositoryProps {
  repo: any;
  lang: any;
  sum: any;
}

import { Container } from "./styles";

const Repository: React.FC<RepositoryProps> = ({ repo, lang, sum }) => {
  return (
    <>
      <Head>
        <title>{repo.name}</title>
      </Head>

      <Container>
        <h1>{repo.name}</h1>
        <h3 style={{ marginBottom: "8px" }}>{repo.description}</h3>
        {lang.map((lang) => (
          <div
            key={lang[1]}
            style={{
              marginBottom: "8px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#f5f5",
                borderRadius: "8px",
                minWidth: "fit-content",
                width: Math.round((lang[1] / sum) * 100) * 3,
                display: "inline-block",
                padding: "4px 6px",
              }}
            >
              <h3> {Math.round((lang[1] / sum) * 100)}% </h3>
            </div>
            <h3>[{lang[0]}]</h3>
          </div>
        ))}
        <div>
          created: {repo.created_at}
          homepage: {repo.homepage}
          github: {repo.html_url}
        </div>
      </Container>
    </>
  );
};

export default Repository;
