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
        href="https://calendly.com/procarrera/15min"
        style={{
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid white",
          fontSize: "14px",
          background: "rgba(196,196,196,0.1)",
          color: "white",
        }}
      >
        Set up a meeting today!
      </a>
      <p style={{ lineHeight: "140%", fontSize: "20px", marginTop: "38px" }}>
        Developed by
        <br />
        <b>Pedro Carrera</b>
      </p>
    </Container>
  );
};

export default Contact;
