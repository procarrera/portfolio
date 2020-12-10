import Link from "next/link";

import { Container, Card, Header, Infos, Tags } from "./styles";

const RepoCard = ({ repo }) => {

  return (
    <Container>
      <a href={repo.html_url}>
        <Card>
          <Header>
            <h1>{repo.name.split("-").join(" ")}</h1>
          </Header>
          <Infos>
            <p>{repo.description}</p>
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
      </a>
    </Container>
  );
};

export default RepoCard;
