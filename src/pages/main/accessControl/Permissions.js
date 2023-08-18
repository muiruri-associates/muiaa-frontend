import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import PermissionsDatatable from "../../../mainComponents/AccessControl/PermissionsDatatable";

const Permissions = () => {
  return (
    <React.Fragment>
      <Head title="Permissions" />
      <Content>
        <p>Permissions Page for general layout</p>
        <PermissionsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Permissions;
