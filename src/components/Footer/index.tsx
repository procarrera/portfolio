import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <p>procarrera@gmail.com</p>
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
      <p>Developed with love
        <br/><b>Pedro Carrera</b></p>
    </Container>
  );
};

export default Footer;
