import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import ViewTicketComponent from "../../../mainComponents/Tickets/ViewTicketComponent";

const ViewTicket = () => {
  return (
    <React.Fragment>
      <Head title="TView icket" />
      <Content>
        <ViewTicketComponent />
      </Content>
    </React.Fragment>
  );
};

export default ViewTicket;
