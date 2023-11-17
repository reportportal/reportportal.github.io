import { useStaticQuery, graphql } from 'gatsby';
import { BlogPostsQueryDto, BlogPostDto } from '@app/utils';

export const useLatestFromOurBlog = (): BlogPostDto[] => {
  const {
    allContentfulBlogPost: { nodes: posts },
  } = useStaticQuery<BlogPostsQueryDto>(graphql`
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
          slug
        }
      }
    }
  `);

  return posts;
};
