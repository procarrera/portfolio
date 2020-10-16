import React from "react";

import { Container, Header, Nav, TwoColumns, OneColumn } from "./styles";
import RepoCard from "../RepoCard";

const Content = ({ repoList }) => {
  const sortedList = repoList.sort(function (a, b) {
    return  parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count);
  });

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
        <TwoColumns>
          <section
            style={{ marginLeft: "5%", fontSize: "28px", fontWeight: "bold" }}
          >
            bio
            <p style={{ lineHeight: "2.5em" }}>
              My first contact with programming and development languages was
              when I was young. In that time, I was very curious how everything
              was behind the screens, and more, how I could change those things
              to add my own imagination to them. PAH! I got my first book of
              Computing Engineering and I started studing C# and C++. Till
              today, about 20 years ago, I still remember my first 'Hello
              World', it looks like your first kiss. From that day on I started
              playing with codes, making my own games, pages, softwares and
              others stuffs.
            </p>
            <br />
            <p style={{ lineHeight: "2.5em" }}>
              {" "}
              Unluckely, on the 90's programming was something very unclear and,
              in general, hard to explain to your parents that it was something
              you would like to study and WORK. Not far from this, I threw this
              idea away and started studing Eletrical Engineering - not
              difficult to imagine: it took 1 year and a half till i decided to
              leave. I decided than to put all technologies in my pocket and
              take a break. I've made many things meanwhile and have learned a
              lot: I became vet, workded with sales on guess what? my head took
              me again to where I really would like to be: studing and
              programming.
            </p>
            <br />
            <p style={{ lineHeight: "2.5em" }}>
              This is my history and I hope it can pass how programming is
              something that I am really passionate. I had many, many others
              opportunities but something call me to code. So, here I am.
              Contact me and let's see how we can cooperate :) thanks for
              reading.
            </p>
          </section>
          <OneColumn>
            <section
              style={{
                marginBottom: "8px",
                marginLeft: "5%",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              open projects
            </section>
            <Nav>
              {sortedList.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </Nav>
          </OneColumn>
        </TwoColumns>
      </Container>
    </>
  );
};

export default Content;
