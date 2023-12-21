import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import GetAllTicketsDatatable from "../../../mainComponents/Tickets/GetAllTicketsDatatable";

const AllTickets = () => {
  return (
    <React.Fragment>
      <Head title="All Tickets" />
      <Content>
        <GetAllTicketsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default AllTickets;
