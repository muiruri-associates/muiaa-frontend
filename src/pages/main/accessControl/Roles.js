import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";

const Roles = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Roles" />
      <Content>
        <p>Roles Page for general layout</p>
      </Content>
    </React.Fragment>
  );
};

export default Roles;
