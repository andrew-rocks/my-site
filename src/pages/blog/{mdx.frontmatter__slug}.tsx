import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { PageProps } from "gatsby";

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title ?? ""}>
      <p>{data.mdx?.frontmatter?.date ?? ""}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.BlogPostQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title ?? ""} />
);

export default BlogPost;
