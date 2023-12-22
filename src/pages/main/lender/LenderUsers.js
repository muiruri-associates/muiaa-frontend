import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";

import GetAllLenderUsersDatatable from "../../../mainComponents/LenderOrg/GetAllLenderUsersDatatable";

const LenderUsers = () => {
  return (
    <React.Fragment>
      <Head title="Lender Users" />
      <Content>
        <GetAllLenderUsersDatatable />
      </Content>
    </React.Fragment>
  );
};

export default LenderUsers;
