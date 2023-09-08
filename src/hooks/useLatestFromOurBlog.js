import { useStaticQuery, graphql } from 'gatsby';

export const useLatestFromOurBlog = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allContentfulBlogPost(sort: { date: DESC }, limit: 3) {
        nodes {
          id
          date(formatString: "MMMM Do, YYYY")
          author
          articleBody {
            raw
          }
          title {
            title
          }
          leadParagraph {
            leadParagraph
          }
          category
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  `);

  return allContentfulBlogPost;
};
