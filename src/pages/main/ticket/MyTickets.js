import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import GetAllTicketsDatatable from "../../../mainComponents/Tickets/GetAllTicketsDatatable";

const Ticket = () => {
  return (
    <React.Fragment>
      <Head title="Ticket" />
      <Content>
        <GetAllTicketsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Ticket;
