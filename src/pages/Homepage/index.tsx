import React from "react";

import Header from "../../components/Header";
import RepoCard from "../../components/RepoCard";

import { Container, Wrapper } from "./styles";

const Homepage = ({ repoList, shouldLock }: any) => {

  const sortedList = repoList.sort(function (a, b) {
    return parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count);
  });

  function callback(page: string){
    shouldLock(page)
    console.log('callback: ', page)
  }

  return (
    <Container>
      <Header pageName={callback}/>
      <Wrapper>
        <h1>Bio</h1>
        <h3>Uma descrição sobre mim</h3>
        {sortedList.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Homepage;
