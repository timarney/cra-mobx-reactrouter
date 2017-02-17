import React from "react";
import Helmet from "react-helmet";
import { Page, Counter, Users } from "../components";

export default () => (
  <Page>
    <Helmet title="Home" />
    <h1>This is the <strong>Home</strong> view.</h1>
    <main>
      <p>
        Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus duis habitant maecenas sem interdum quisque duis mauris scelerisque scelerisque dui elit a condimentum vestibulum ad vestibulum. Laoreet nostra dui vivamus vestibulum integer taciti suscipit consectetur in a nullam quam nam ad nunc class nec ullamcorper urna sed nascetur ad. Vestibulum a sem leo nunc condimentum vestibulum euismod sapien aenean adipiscing a mi volutpat non fames. Adipiscing parturient parturient sit nec viverra tristique dui senectus commodo sem eu vestibulum vestibulum lorem ullamcorper. A quis a volutpat posuere suspendisse commodo nec elit parturient parturient sit ac sed suspendisse nam ullamcorper. Sit in a ut vivamus fringilla penatibus suspendisse scelerisque eu bibendum a egestas sodales vel rhoncus phasellus suspendisse faucibus viverra ultricies fusce laoreet libero a taciti.
      </p>
      <p>
        Elementum cras id suspendisse mi ut eros elit a enim curabitur posuere adipiscing eleifend auctor dictumst hac porttitor iaculis dis. Ut porttitor neque etiam primis et vestibulum parturient consectetur a etiam class consectetur a in massa parturient hac sed litora massa. Arcu enim arcu ac interdum ullamcorper consectetur aptent natoque curae mattis adipiscing a non metus netus arcu accumsan nam quisque condimentum posuere platea congue nisl mollis id nascetur.
      </p>
       <Users />
        <Counter />
    </main>

  </Page>
);
