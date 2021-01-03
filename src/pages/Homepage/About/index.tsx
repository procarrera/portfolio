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
        I'm <b>Fullstack developer</b> with a guided mind to
        create the best experience for the end user.
      </div>
      <div className="history">
        Borned in 1986, Brazil. I could follow the development of techonology
        from the very begining. Creative mind, dedication and friendship have
        led me to study a lot by my own and today I work as freelancer with web
        development and mobile application.
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
          </div>
          <div>
            <h1 className="timelineItem">
              <img src="/img/nextLogo.svg" />
              <span>
                Introduced to the NextJS, the most powerful tool today.
              </span>
            </h1>
            <h1 className="timelineItem">
              <img src="/img/reactjs-icon.svg" />
              <span>React has transformed the morden way of developing.</span>
            </h1>
            <h1 className="timelineItem">
              <img
                src="/img/java-script-logo.svg"
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
              <span>JavaScript and Typescript are a powerful choice.</span>
            </h1>
            <h1 className="timelineItem">
              <img src="/img/website-ui-ux.svg" />
              <span>
                UX/UI <br />
                Usability applied to Mobile and Web
              </span>
            </h1>
            <h1 className="timelineItem">
              <img src="/img/nodejs.svg" />
              <span>I usually use NodeJS to develop my Backends.</span>
            </h1>
            <h1 className="timelineItem">
              <img src="/img/code.svg" />
              <span>
                I've been studying different code languages in the past years.
              </span>
            </h1>
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
            <span>Curious</span>
            <span>Creative</span>
            <span>Analytical</span>
            <span>Strategist</span>
            <span>Enthusiastic</span>
            <span>Positive</span>
            <span>Intuitive</span>
            <span>Happy</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
