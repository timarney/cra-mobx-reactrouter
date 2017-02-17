import React from "react";
import Helmet from "react-helmet";
import { Page } from "../components";

export default () => (
  <Page>
    <Helmet title="404" />
    <h1>Sorry</h1>
    <main>
      <p>Page Not Found</p>
    </main>
  </Page>
);
