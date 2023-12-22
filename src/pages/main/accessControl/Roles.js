import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import RolesDatatable from "../../../mainComponents/AccessControl/RolesDatatable";

const Roles = () => {
  return (
    <React.Fragment>
      <Head title="Roles" />
      <Content>
        <p>Roles Page for general layout</p>
        <RolesDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Roles;
