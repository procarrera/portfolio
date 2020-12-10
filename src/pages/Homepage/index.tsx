import React, { useState } from "react";

import Header from "../../components/Header";

import Projects from "./Projects";
import About from "./About";

import { Container } from "./styles";

const Homepage = ({ repoList, shouldLock }: any) => {
  const [module, setModule] = useState("home");

  const sortedList = repoList.sort(function (a, b) {
    return parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count);
  });

  function callback(page: string) {
    shouldLock(page);
    setModule(page);
    console.log("callback: ", page);
  }

  return (
    <Container>
      <Header pageName={callback} />
      {module === "home" && <Projects sortedList={sortedList} page={module} />}
      {module === "about" && <About />}
      {module === "projects" && <Projects sortedList={sortedList}  page={module} />}
      {module === "techs" && <Projects sortedList={sortedList} />}
      {module === "contact" && <Projects sortedList={sortedList} />}
    </Container>
  );
};

export default Homepage;
