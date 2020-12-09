import Link from "next/link";

import { Container, Card, Header, Infos, Tags } from "./styles";

const RepoCard = ({ repo }) => {
  console.log(repo.topics);

  return (
    <Container>
      <Link as={`/repo/${repo.name}`} href="/repo/[repo_name]" passHref>
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
      </Link>
    </Container>
  );
};

export default RepoCard;
