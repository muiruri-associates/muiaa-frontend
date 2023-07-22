import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";

import GetAllLenderOrgsDatatable from "../../../mainComponents/LenderOrg/GetAllLenderOrgsDatatable";
import { Button } from "reactstrap";

const LenderOrganizations = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Lender Organizations" />
      <Content>
        <GetAllLenderOrgsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default LenderOrganizations;
