import React from "react";

import { Container } from "./styles";

const About = () => {
  return (
    <Container>
      <h1>
        Hello!
        <span>
          <br />
          <b>my name is Pedro Carrera</b>
        </span>
      </h1>
      <div className="bio">
        I'm <b>Fullstack developer</b> with a guided mind to create the best
        experiences.
      </div>
      <div className="history">
        Borned in 1986, Brazil. I could follow the development of techonology
        from the very begining. Creative mind, dedication and friendship have
        led me to study a lot by myself and today I work as fullstack developer,
        for web and mobile application.
      </div>
      <div className="breaker">Learning &amp; Progression</div>
      <div className="main">
        <div className="timeline">
          <div className="line">
            <img src="/img/keep_learning.svg" alt="" />
            <img src="/img/ellipse.png" alt="" />
            <img src="/img/ellipse.png" alt="" />
            <img src="/img/ellipse.png" alt="" />
            <img src="/img/ellipse.png" alt="" />
            <img src="/img/ellipse.png" alt="" />
            <img src="/img/ellipse.png" alt="" />
          </div>
          <div>
            <a className="timelineItem" href="https://nextjs.org/">
              <img src="/img/nextLogo.svg" />
              <span>Currently using NextJS, the most powerful tool today.</span>
            </a>
            <a className="timelineItem" href="https://reactjs.org/">
              <img src="/img/reactjs-icon.svg" />
              <span>React has transformed my concept of development.</span>
            </a>
            <a className="timelineItem" href="https://www.typescriptlang.org">
              <img
                src="/img/java-script-logo.svg"
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
              <span>Javascript and Typescript, clean code for everyone.</span>
            </a>
            <a className="timelineItem" href="https://en.wikipedia.org/wiki/User_experience">
              <img src="/img/website-ui-ux.svg" />
              <span>
                UX/UI <br />
                Usability applied to Mobile and Web
              </span>
            </a>
            <a className="timelineItem" href="https://nodejs.org/en">
              <img src="/img/nodejs.svg" />
              <span>I usually use NodeJS to develop my Backends.</span>
            </a>
            <a className="timelineItem" href="">
              <img src="/img/code.svg" />
              <span>
                I've been studying different code languages in the past years.
              </span>
            </a>
          </div>
        </div>

        <div className="skills">
          <div className="techs">
            <p>Skills:</p>
            <img src="/img/reactjs.svg" />
            <img src="/img/mongodb.svg" />
            <img src="/img/aws.svg" />
            <img src="/img/rest-api.svg" />
            <img src="/img/GitHub_Logo_White.png" />
          </div>
          <div className="softskills">
            <p>Soft Skills:</p>
            <span>Dedicated</span>
            <span>Good listener</span>
            <span>Curious</span>
            <span>Creative</span>
            <span>Analytical</span>
            <span>Strategist</span>
            <span>Teamwork</span>
            <span>Positive</span>
            <span>Collaboration</span>
            <span>Confidence</span>
            <span>Happy</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
