import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
// import AllLeadsDatatable from "../../../mainComponents/Loans/AllLeadsDatatable";
import  AllLeadsDatatable from "../../../mainComponents/Leads/AllLeadsDatatable";

const AllLeads = () => {
  return (
    <React.Fragment>
      <Head title="Loans Applied" />
      <Content>
        <AllLeadsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default AllLeads;
