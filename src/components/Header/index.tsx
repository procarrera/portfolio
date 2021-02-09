import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { Container, Wrapper } from "./styles";

const CroctComponent = dynamic(() => import("../CroctComponent"), {
  ssr: false,
});

interface HeaderProps {
  pageName: any;
}

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  const [module, setModule] = useState("home");
  const [minHeader, setMinHeader] = useState(true);

  useEffect(() => {}, [minHeader]);

  function handleCollapse(page: string) {
    if (page !== module) {
      pageName(page);
      setModule(page);
      if (module === "home" || page === "home") {
        setMinHeader(!minHeader);
      }
    }
  }
  return (
    <Container fullHeight={minHeader} module={module}>
      <Wrapper fullHeight={minHeader} module={module}>
        {module === "home" && (
          <div className="header">
            <Image width={220} height={220} src="/img/me.jpg" alt="avatar" />
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
          <div className="sub-navigation">
            <CroctComponent setPage={handleCollapse} />
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
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
