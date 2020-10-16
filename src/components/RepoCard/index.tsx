import Link from "next/link";

import { Card, Header, Infos, Tags } from "./styles";

const RepoCard = ({ repo }) => {
  console.log(repo.topics);

  return (
    <Link as={`/repo/${repo.name}`} href="/repo/[repo_name]" passHref>
      <Card>
        <Header>
          <h1>{repo.name.split("-").join(" ")}</h1>
          <h2>{repo.stargazers_count>0?<img src="/img/star.svg" width="20px"/>:<h2></h2>}</h2>
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
  );
};

export default RepoCard;
