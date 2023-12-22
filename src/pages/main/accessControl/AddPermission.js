import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import CreatePermissionForm from "../../../mainComponents/AccessControl/CreatePermissionForm";

const AddPermission = () => {
  return (
    <React.Fragment>
      <Head title="AddPermission" />
      <Content>
        <p>Add Permission Page for general layout</p>
        <CreatePermissionForm />
      </Content>
    </React.Fragment>
  );
};

export default AddPermission;
