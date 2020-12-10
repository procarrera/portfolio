import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const Techs = ({ page }: any) => {
  useEffect(() => {
    console.log("Projects PAGE: ", page);
  }, [page]);

  return (
    <Container>
      <div className="header">
        <span>
          <h1>
            Yeeep, here is
            <br /> my favorite
            <br /> stack.
          </h1>
          <h3></h3>
        </span>
        <img src="/img/rise.svg" alt="" />
      </div>
      <div className="stack">
        <div className="tech">
          <a href="https://nextjs.org/">
            <img src="/img/nextjs.svg" alt="" />
            <div className="infos">
              <span>
                Next.js gives you the best developer experience with all the
                features you need for production: hybrid static & server
                rendering, TypeScript support, smart bundling, route
                pre-fetching, and more. No config needed.
              </span>
            </div>
          </a>
        </div>
        <div className="tech">
          <a href="https://reactjs.org/">
            <img src="/img/reactjs-icon.svg" alt="" />
            <div className="infos">
              <span>
                React is a declarative, efficient, and flexible JavaScript
                library for building user interfaces. It lets you compose
                complex UIs from small and isolated pieces of code called
                “components”.
              </span>
            </div>
          </a>
        </div>
        <div className="tech">
          <a href="https://nodejs.org/">
            <img src="/img/nodejs.svg" alt="" />
            <div className="infos">
              <span>
                As an asynchronous event-driven JavaScript runtime, Node.js is
                designed to build scalable network applications. In the
                following "hello world" example, many connections can be handled
                concurrently. Upon each connection, the callback is fired, but
                if there is no work to be done, Node.js will sleep.
              </span>
            </div>
          </a>
        </div>
        <div className="tech">
          <a href="https://www.mongodb.com/">
            <img src="/img/mongodb.svg" alt="" />
            <div className="infos">
              <span>
                MongoDB is a general purpose, document-based, distributed
                database built for modern application developers and for the
                cloud era. No database makes you more productive.
              </span>
            </div>
          </a>
        </div>
        <div className="tech">
          <a href="https://expressjs.com/">
            <img
              src="/img/express.svg"
              alt=""
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="infos">
              <span>
                Express is a minimal and flexible Node.js web application
                framework that provides a robust set of features for web and
                mobile applications.
              </span>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Techs;
