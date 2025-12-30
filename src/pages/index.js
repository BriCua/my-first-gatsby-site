import * as React from "react";
import { Link } from "gatsby";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!!!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/about">About This Site</Link>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO  />
);
