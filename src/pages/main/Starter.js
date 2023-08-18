import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Starter = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Starter" />
      <Content>
        <p>Starter Page for general layout</p>
      </Content>
    </React.Fragment>
  );
};

export default Starter;
