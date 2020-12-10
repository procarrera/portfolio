import React from 'react';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <p>Nice to see you here!</p>
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
      <p style={{ marginTop: "38px"}}>
        Developed with love
        <br />
        <b>Pedro Carrera</b>
      </p>
    </Container>
  );
};

export default Contact;
