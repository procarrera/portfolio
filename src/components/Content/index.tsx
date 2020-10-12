import React from "react";

import { Container, Header, Nav, Link } from "./styles";

const Content = ({ repoList }) => {
  return (
    <>
      <Container>
        <Header>
          <img className="avatar" src="/img/53456120.jpeg" alt="my image"/>
          <div style={{paddingLeft: "25px"}} className="bio">
            <h2>/dev</h2>
            <h1>PEDRO CARRERA</h1>
            <h3> &gt; developing with love</h3>
            <div className="social-media">
              <img src="/img/github.svg" alt=""/>
              <img src="/img/linkedin.svg" alt=""/>
              <img src="/img/twitter.svg" alt=""/>
            </div>
          </div>
          
        </Header>
        <section style={{marginLeft: "5%", fontSize:"28px", fontWeight: "bold"}}>open projects/</section>
        <Nav>
          {repoList.map(
            repo => (
              <Link key={repo.id}>
                <a className="bold" href={repo.html_url}>{repo.name}</a>
                <hr/>
                {
                repo.description? <p>{repo.description}</p>:<p> &nbsp; </p>
                }
                {
                  repo.homepage? <a id="homepage" href="">@ {repo.homepage}</a>:<p id="homepage"> &nbsp; </p>
                }
               
              </Link>
            )
          )}
        </Nav>
      </Container>
    </>
  );
};

export default Content;
