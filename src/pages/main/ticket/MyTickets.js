import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import GetAllUserTicketsDatatable from "../../../mainComponents/Tickets/GetAllUserTicketsDatatable";

const Ticket = () => {
  return (
    <React.Fragment>
      <Head title="Ticket" />
      <Content>
        <GetAllUserTicketsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Ticket;
