import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import ViewTicketComponent from "../../../mainComponents/Tickets/ViewTicketComponent";
// import ViewTicketOne from "../../../mainComponents/Tickets/ViewTicketOne";

const ViewTicket = () => {
  return (
    <React.Fragment>
      <Head title="TView icket" />
      <Content>
        <ViewTicketComponent />
        {/* <ViewTicketOne /> */}
      </Content>
    </React.Fragment>
  );
};

export default ViewTicket;
