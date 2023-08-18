import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LeadsDatatable from "../../../mainComponents/Leads/LeadsDatatable";

const Leads = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Leads" />
      <Content>
        <p>Leads Page for general layout</p>
        <LeadsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Leads;