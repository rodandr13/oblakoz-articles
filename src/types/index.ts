export type MetaData = {
  title: string;
  keywords: string;
  description: string;
};

export type Article = {
  id: number;
  title: string;
  views: number;
  href: string;
  date: string;
  coverSrc: string;
  rubricId: string;
};

export type Rubric = {
  id: string;
  title: string;
};

export type PageProps = {
  metaData: MetaData;
  articles: Article[];
  totalPages: number;
  activePage: number;
  rubrics: Rubric[];
  activeRubrics: string[];
};

export type ServerResponse = {
  pageProps: PageProps;
};
