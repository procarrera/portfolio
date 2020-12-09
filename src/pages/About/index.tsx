import React from "react";

import Header from "../../components/Header";

import { Container, Wrapper } from "./styles";

const About = () => {

  function callback(page: string){
    console.log('callback: ', page)
  }

  return (
    <Container>
      <Header pageName={callback}/>
      <Wrapper>
        <h1>About Page</h1>
      </Wrapper>
    </Container>
  );
};

export default About;
