import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";

import CreateLenderUserForm from "../../../mainComponents/LenderOrg/CreateLenderUserForm";

const CreateLenderUser = () => {
  return (
    <React.Fragment>
      <Head title="Create" />
      <Content>
        <CreateLenderUserForm />
      </Content>
    </React.Fragment>
  );
};

export default CreateLenderUser;
