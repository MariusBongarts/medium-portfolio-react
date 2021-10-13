import { FC, useEffect, useState } from "react";
import "./Main.css";
import { MediumArticles } from "./components/MediumArticles";
import { MediumHeader } from "./components/MediumHeader";
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
      {!hideHeader && (
        <MediumHeader title={rssFeed.feed.title} image={rssFeed.feed.image} />
      )}
      <MediumArticles articles={rssFeed.articles} />
    </div>
  );
};
