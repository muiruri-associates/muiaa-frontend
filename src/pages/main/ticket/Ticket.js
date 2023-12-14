import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import CreateTicketForm from "../../../mainComponents/Tickets/CreateTicketForm";

const Ticket = () => {
  return (
    <React.Fragment>
      <Head title="Ticket" />
      <Content>
        <CreateTicketForm />
      </Content>
    </React.Fragment>
  );
};

export default Ticket;
