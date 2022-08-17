import { IArticle } from "./Articles";
// 1

export interface IStateArticle {
  articles: Array<IArticle>;
  loading: boolean;
  totalArticles: number | undefined;
}

export interface IStateArticles {
  articles: IStateArticle;
}
