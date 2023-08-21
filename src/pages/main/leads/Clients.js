import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LeadsDatatable from "../../../mainComponents/Leads/LeadsDatatable";

const Clients = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Clients" />
      <Content>
        <p>Clients Page for general layout</p>
        <LeadsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Clients;
