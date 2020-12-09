import React, { useState } from "react";

import { Container, Wrapper } from "./styles";

interface HeaderProps {
  pageName: any;
}

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  const [module, setModule] = useState("home");
  const [minHeader, setMinHeader] = useState(true);

  function handleCollapse(page: string) {
    pageName(page);
    setModule(page);
    setMinHeader(!minHeader);
  }

  return (
    <Container fullHeight={minHeader} module={module}>
      <Wrapper>
        {minHeader && (
          <div className="header">
            <img src="/img/avatar.jpeg" alt="avatar" />
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
          <button onClick={() => handleCollapse("home")}>Home</button>
          <button onClick={() => handleCollapse("about")}>About</button>
          <button onClick={() => handleCollapse("projects")}>Projects</button>
          <button onClick={() => handleCollapse("techs")}>Technologies</button>
          <button onClick={() => handleCollapse("contact")}>Contact</button>
        </nav>
      </Wrapper>
    </Container>
  );
};

export default Header;
