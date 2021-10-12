import { FC } from "react";
import { Article } from "../services/medium-feed";
import "./MediumArticles.css";
import { MediumArticleCard } from "./MediumArticleCard";

interface MediumArticlesProps {
  articles: Article[];
}

export const MediumArticles: FC<MediumArticlesProps> = ({ articles }) => {
  return (
    <section className="cards">
      {articles.map((article, index) => (
        <MediumArticleCard article={article} key={index} />
      ))}
    </section>
  );
};
