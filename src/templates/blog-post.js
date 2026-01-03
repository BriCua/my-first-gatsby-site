import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

const BlogPost = ({ data, children }) => {
  const { mdx, previous, next } = data;

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <p>{mdx.frontmatter.date}</p>

      {children}

      <nav style={{ marginTop: "2rem" }}>
        {previous && (
          <Link to={`/blog/${previous.frontmatter.slug}`}>
            ← {previous.frontmatter.title}
          </Link>
        )}

        {next && (
          <Link
            to={`/blog/${next.frontmatter.slug}`}
            style={{ float: "right" }}
          >
            {next.frontmatter.title} →
          </Link>
        )}
      </nav>
    </Layout>
  );
};
export const query = graphql`
  query BlogPost($id: String!, $previousId: String, $nextId: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
      }
      excerpt(pruneLength: 160)
    }

    previous: mdx(id: { eq: $previousId }) {
      frontmatter {
        title
        slug
      }
    }

    next: mdx(id: { eq: $nextId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} description={data.mdx.excerpt} />
);

export default BlogPost;
