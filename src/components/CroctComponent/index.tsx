import React, { useEffect, useState } from "react";
import croct from "@croct/plug";
import Link from "next/link";

import { Container } from "./styles";

interface CroctComponentProps {
  setPage: any;
}

const CroctComponent: React.FC<CroctComponentProps> = ({ setPage }) => {
  const [userReturning, setUserReturning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [github, setGitHub] = useState(false);
  const [linkedin, setLinkedin] = useState(false);

  croct.plug({ appId: "00000000-0000-0000-0000-000000000000" });

  useEffect(() => {
    // CHECK IF USER IS RETURNING //
    croct
      .evaluate("user is returning")
      .then((returning) => setUserReturning(Boolean(returning)));

    // CHECK ACCESS ORIGIN //
    croct.evaluate("page's referrer").then((url) => {
      // If URL contains 'github' //
      const a = String(url).search("github");
      if (a >= 0) {
        setGitHub(true);
      }
      // If URL contains 'linkedin' //
      const b = String(url).search("linkedin");
      if (b >= 0) {
        setLinkedin(true);
      }
      // Loading state turns off //
      setLoading(false);
    });
  }, []);

  function handleAction(page: string) {
    setPage(page);
  }

  // If component's still loading //
  if (loading) return <div className="hidden">Loading</div>;

  return (
    <Container>
      {/* If User's Origin is GitHub */}
      {github && (
        <>
          <div className="origin-interaction">
            Hi! Looking for a <b>new member</b> for your team or
            <br />a freelancer for web development?
          </div>
          <button onClick={() => handleAction("contact")}>
            Get in touch today!
          </button>
          {/* if user is returning */}
          {userReturning && (
            <div style={{ textAlign: "center" }}>
              Don't miss the chance again...
            </div>
          )}
        </>
      )}
      {/* If User's Origin is LinkedIn */}
      {linkedin && (
        <>
          <div className="origin-interaction">
            Hi! Coming from LinkedIn?
            <br />
            <b>Let me show</b> you a little bit more about me!
          </div>
          <button onClick={() => handleAction("about")}>Start the tour!</button>
          {/* if user is returning */}
          {userReturning && (
            <div style={{ textAlign: "center" }}>
              Don't miss the chance again...
            </div>
          )}
        </>
      )}
      {/* Fallback */}
      {!github && !linkedin && (
        <div className="contact-social">
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
    </Container>
  );
};

export default CroctComponent;
