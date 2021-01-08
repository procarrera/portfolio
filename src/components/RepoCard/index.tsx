import Link from "next/link";

import { Container, Card, Header, Infos, Tags } from "./styles";

const RepoCard = ({ repo }) => {
  return (
    <Container>
      <div>
        <Card>
          <Header>
            <h1>{repo.name.split("-").join(" ")}</h1>
          </Header>
          <Infos>
            <p>{repo.description}</p>
            {repo.homepage && (
              <a id="projectLink" href={repo.homepage} target="parent">
                <img src="/img/link-icon.svg" alt="External Link" />
                {repo.homepage}
              </a>
            )}
            <a id="repoLink" href={repo.html_url}>
              <img src="/img/github.svg" alt="" />
              {repo.html_url}
            </a>
          </Infos>
          <Tags>
            {repo.topics.map((tag) => (
              <img
                className="tags"
                key={tag}
                src={`/img/${tag}.svg`}
                alt={tag}
                height="18px"
              />
            ))}
          </Tags>
        </Card>
      </div>
    </Container>
  );
};

export default RepoCard;
