export interface DataProps {
  contentfulBlogPost: {
    industry: string;
    title?: {
      title: string;
    };
    author: string;
    date: string;
    articleBody: string;
  };
}
