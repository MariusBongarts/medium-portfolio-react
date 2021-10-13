import { FC } from "react";
import { Article } from "../services/medium-feed";
import { MediumCategoryChips } from "./MediumCategoryChips";

import "./MediumArticleCard.css";

interface MediumArticleCardProps {
  article: Article;
}

export const MediumArticleCard: FC<MediumArticleCardProps> = ({ article }) => {
  return (
    <article className="card card--1">
      <div className="card-img"></div>
      <a
        href={article.link}
        target="_blank"
        className="card_link"
        rel="noreferrer"
      >
        <div
          className="card-img--hover"
          style={{ backgroundImage: `url('${article.thumbnail}')` }}
        ></div>
      </a>
      <div className="card-info">
        <div className="card-title">
          <a target="_blank" href={article.link} rel="noreferrer">
            {article.title}
          </a>
        </div>

        <MediumCategoryChips categories={article.categories} />

        <div className="card-footer">
          <span>by</span>
          <a
            target="_blank"
            href={article.userLink}
            className="card-author"
            rel="noreferrer"
            title="author"
          >
            {article.author}
          </a>
          <span className="card-date">
            {new Date(article.pubDate).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
};
