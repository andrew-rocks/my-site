import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, PageProps, graphql } from "gatsby";

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter?.slug}`}>
              {node.frontmatter?.title}
            </Link>
            <p>Posted: {node.frontmatter?.date}</p>
          </h2>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
