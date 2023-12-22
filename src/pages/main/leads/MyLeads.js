import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LeadsDatatable from "../../../mainComponents/Leads/LeadsDatatable";

const Clients = () => {
  return (
    <React.Fragment>
      <Head title="Clients" />
      <Content>
        <LeadsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Clients;
