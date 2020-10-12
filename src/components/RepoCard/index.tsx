import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../../../pages/api/github";

import { Card, Container } from "./styles";

const RepoCard = ({ repo }) => {
  console.log(repo.topics);

  return (
    <Container>
      <Card>
        <Link as={`/repo/${repo.name}`} href="/repo/[repo_name]" passHref>
          <a className="bold">{repo.name}</a>
        </Link>
        <hr />
        <p>{repo.description}</p>
        <hr />
        {repo.homepage ? (
          <a id="homepage">@ {repo.homepage}</a>
        ) : (
          <p id="homepage"> &nbsp; </p>
        )}
        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
            alignItems: "end",
            justifyContent: "left",
          }}
        >
          {repo.topics.map((tag) => (
            <img
              key={tag}
              src={`/img/${tag}.svg`}
              alt={tag}
              height="25px"
              style={{ paddingRight: "25px" }}
            />
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default RepoCard;
