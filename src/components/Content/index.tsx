import React from "react";

import { Container, Header, Nav } from "./styles";
import RepoCard from "../RepoCard";

const Content = ({ repoList }) => {

  return (
    <>
      <Container>
        <Header>
          <img
            className="avatar"
            src="/img/53456120.jpeg"
            alt="my image"
            width="200px"
          />
          <div style={{ paddingLeft: "25px" }} className="bio">
            <h2>/dev</h2>
            <h1>PEDRO CARRERA</h1>
            <h3> &gt; developing with love</h3>
            <div className="social-media">
              <img src="/img/github.svg" alt="" width="50px" />
              <img src="/img/linkedin.svg" alt="" width="50px" />
              <img src="/img/twitter.svg" alt="" width="50px" />
            </div>
          </div>
        </Header>
        <section
          style={{ marginLeft: "5%", fontSize: "28px", fontWeight: "bold" }}
        >
          open projects/
        </section>
        <Nav>
          {
          repoList.map((repo) => <RepoCard key={repo.id} repo={repo}/>)
        }
        </Nav>
      </Container>
    </>
  );
};

export default Content;
