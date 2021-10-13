import { FC, useEffect, useState } from "react";
import "./Main.css";
import { MediumArticles } from "./components/MediumArticles";
import { MediumHeader } from "./components/MediumHeader";
import { ChangeConfig } from "./components/ChangeConfig";
import { getRssFeed, RssFeed } from "./services/medium-feed";

export interface MainProps {
  username: string;
  hideHeader?: boolean;
  maxArticles?: number;
}

export type PortfolioConfig = Required<MainProps>;

const DEFAULT_MAX_ARTICLES = 10;

export const Main: FC<MainProps> = ({ username, hideHeader, maxArticles }) => {
  const [config, setConfig] = useState<PortfolioConfig>({
    username,
    hideHeader: hideHeader ?? false,
    maxArticles: maxArticles ?? DEFAULT_MAX_ARTICLES,
  });

  const [rssFeed, setRssFeed] = useState<RssFeed>();

  useEffect(() => {
    const fetchRssFeed = async () =>
      getRssFeed(config.username, config.maxArticles);

    fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
  }, [config]);

  const onConfigChange = (config: PortfolioConfig) => setConfig(config);

  if (!rssFeed) return <span>Loading...</span>;

  return (
    <>
      <ChangeConfig config={config} onChange={onConfigChange} />
      <div id="medium-portfolio-app">
        {!hideHeader && (
          <MediumHeader title={rssFeed.feed.title} image={rssFeed.feed.image} />
        )}
        <MediumArticles articles={rssFeed.articles} />
      </div>
    </>
  );
};
