import React, { useEffect, useState } from "react";

import { Container, Wrapper } from "./styles";

interface HeaderProps {
  pageName: any;
}

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  const [module, setModule] = useState("home");
  const [minHeader, setMinHeader] = useState(true);

  useEffect(() => {
    console.log("Effect minHeader: ", minHeader);
  }, [minHeader]);

  function handleCollapse(page: string) {
    if (page !== module) {
      pageName(page);
      setModule(page);
      console.log(minHeader);
      if (module === "home" || page === "home") {
        setMinHeader(!minHeader);
        console.log("minHeader: ", minHeader);
      }
    }
  }
  return (
    <Container fullHeight={minHeader} module={module}>
      <Wrapper fullHeight={minHeader} module={module}>
        {module === "home" && (
          <div className="header">
            <img src="/img/me.jpg" alt="avatar" />
            <div className="animation">
              <h1>
                <span>Developer</span>
                <span>Entrepreneur</span>
                <span>Techlover</span>
              </h1>
            </div>
          </div>
        )}
        <nav>
          {module !== "home" && (
            <button onClick={() => handleCollapse("home")}>Home</button>
          )}
          <button onClick={() => handleCollapse("about")}>About</button>
          <button onClick={() => handleCollapse("projects")}>Projects</button>
          <button onClick={() => handleCollapse("techs")}>Technology</button>
          <button onClick={() => handleCollapse("contact")}>Contact</button>
        </nav>
        {module === "home" && (
          <div className="social">
            <a href="https://github.com/procarrera">
              <img src="/img/github.svg" alt="" />
            </a>
            <a href="https://twitter.com/procarrera_">
              <img src="/img/twitter.svg" alt="" />
            </a>
            <a href="https://wa.me/5521986816996">
              <img src="/img/whatsapp.svg" alt="" />
            </a>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
