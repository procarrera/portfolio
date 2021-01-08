import React, { useState } from "react";

import Header from "../../components/Header";

import Projects from "./Projects";
import About from "./About";
import Tech from "./Techs";
import Contact from "./Contact";

import { Container } from "./styles";

const Homepage = ({ repoList, shouldLock }: any) => {
  console.log(repoList);
  const [module, setModule] = useState("home");

  const sortedList = repoList.sort((a, b) => {

    return b.topics.length - a.topics.length;

    console.log(b.homepage - a.homepage);
    return b.homepage.length - a.homepage.length;
  });

  function callback(page: string) {
    shouldLock(page);
    setModule(page);
    window.scrollTo(0, 0);
    console.log("callback: ", page);
  }

  return (
    <Container>
      <Header pageName={callback} />
      {module === "home" && <Projects sortedList={sortedList} page={module} />}
      {module === "about" && <About />}
      {module === "projects" && (
        <Projects sortedList={sortedList} page={module} />
      )}
      {module === "techs" && <Tech page={module} />}
      {module === "contact" && <Contact />}
    </Container>
  );
};

export default Homepage;
