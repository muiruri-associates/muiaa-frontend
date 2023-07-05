import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Lenders = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Lenders" />
      <Content>
        <p>Lenders Page for general layout</p>
      </Content>
    </React.Fragment>
  );
};

export default Lenders;
