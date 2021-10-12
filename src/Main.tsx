import { FC, useEffect, useState } from "react";
import "./Main.css";
import { MediumArticles } from "./components/MediumArticles";
import { getRssFeed, RssFeed } from "./services/medium-feed";

interface MainProps {
  username: string;
  hideHeader?: boolean;
  maxArticles?: number;
}

const DEFAULT_MAX_ARTICLES = 10;

export const Main: FC<MainProps> = ({ username, hideHeader, maxArticles }) => {
  const [rssFeed, setRssFeed] = useState<RssFeed>();

  useEffect(() => {
    const fetchRssFeed = async () =>
      getRssFeed(username, maxArticles ?? DEFAULT_MAX_ARTICLES);

    fetchRssFeed().then((rssFeed) => setRssFeed(rssFeed));
  }, [username, maxArticles]);

  if (!rssFeed) return <span>Loading...</span>;

  return (
    <div id="medium-portfolio-app">
      <MediumArticles articles={rssFeed.articles} />
    </div>
  );
};
