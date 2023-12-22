import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import CreateLenderOrgForm from "../../../mainComponents/LenderOrg/CreateLenderOrgForm";

const CreateLenderOrganizations = () => {
  return (
    <React.Fragment>
      <Head title="CreateLenderOrganizations" />
      <Content>
        <CreateLenderOrgForm />
      </Content>
    </React.Fragment>
  );
};

export default CreateLenderOrganizations;
