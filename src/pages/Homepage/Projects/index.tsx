import React, { useEffect, useState } from "react";

import RepoCard from "../../../components/RepoCard";

import { Container } from "./styles";

const Homepage = ({ sortedList, page }: any) => {
  useEffect(() => {
  }, [page]);

  return (
    <Container page={page}>
      <div className="header">
        <span>
          <h1>Here are my projects :)</h1>
          <h3>
            jobs, studies, experiments and collaborations.
          </h3>
        </span>
      </div>

      {sortedList.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </Container>
  );
};

export default Homepage;
