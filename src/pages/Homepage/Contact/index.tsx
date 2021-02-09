import React from "react";
import Image from "next/image";
import { Container } from "./styles";

const Contact: React.FC = () => {
  return (
    <Container>
      <Image width={150} height={150} src="/img/me.jpg" alt="avatar" />
      <p>
        Nice to see you here!
        <br />I will love to hear from you :)
      </p>
      <a
        className="meeting"
        href="https://calendly.com/procarrera/15min"
        style={{

        }}
      >
        <Image src="/img/google-meet.svg" width={55} height={55}/>
        <span style={{marginLeft: "8px"}}>set up a meeting!</span>
      </a>
      <p
        style={{
          fontSize: "12px",
        }}
      >
        -- or --
      </p>
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
      <p style={{ lineHeight: "140%", fontSize: "20px", marginTop: "38px" }}>
        Developed by
        <br />
        <b>Pedro Carrera</b>
      </p>
    </Container>
  );
};

export default Contact;
