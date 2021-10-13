import { FC, useEffect, useState } from "react";
import "./Main.css";
import { MediumArticles } from "./components/MediumArticles";
import { MediumHeader } from "./components/MediumHeader";
import { ChangeUser } from "./components/ChangeUser";
import { getRssFeed, RssFeed } from "./services/medium-feed";

interface MainProps {
  username: string;
  hideHeader?: boolean;
  maxArticles?: number;
}

const DEFAULT_MAX_ARTICLES = 10;

export const Main: FC<MainProps> = ({ username, hideHeader, maxArticles }) => {
  const [user, setUser] = useState(username);
  const [rssFeed, setRssFeed] = useState<RssFeed>();

  useEffect(() => {
    const fetchRssFeed = async () =>
      getRssFeed(user, maxArticles ?? DEFAULT_MAX_ARTICLES);

    fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
  }, [user, maxArticles]);

  if (!rssFeed) return <span>Loading...</span>;

  return (
    <>
      <ChangeUser
        username={username}
        onChange={(username) => setUser(username)}
      />
      <div id="medium-portfolio-app">
        {!hideHeader && (
          <MediumHeader title={rssFeed.feed.title} image={rssFeed.feed.image} />
        )}
        <MediumArticles articles={rssFeed.articles} />
      </div>
    </>
  );
};
