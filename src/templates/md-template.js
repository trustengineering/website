import React from "react";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="md-page">
            <div
                className="md-page-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
