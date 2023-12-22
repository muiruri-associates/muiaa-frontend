import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import ViewLenderOrg from "../../../mainComponents/LenderOrg/ViewLenderOrg";

const ViewLenderOrganizationPage = () => {
  return (
    <React.Fragment>
      <Head title="View Lender Organization Page" />
      <Content>
        <p>View Lender Organization Page</p>
        <ViewLenderOrg />
      </Content>
    </React.Fragment>
  );
};

export default ViewLenderOrganizationPage;
