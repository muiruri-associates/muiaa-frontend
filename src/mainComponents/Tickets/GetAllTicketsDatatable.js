import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
} from "../../components/Component";
import { getAllTickets } from "../../redux/actions/ticketActions";
import { TicketColums } from "./TicketsData";

const GetAllTicketsDatatable = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket);
  console.log("All tickets in component", ticket);

  useEffect(() => {
    dispatch(getAllTickets());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Head title="My Ticket" />
      <Content page="component">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* First BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BlockTitle tag="h2" className="fw-normal">
                Tickets
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>
        </div>
        <br />

        <Block size="lg">
          <PreviewCard>
            {ticket.loading && <div>Loading...</div>}
            {!ticket.loading && ticket.error ? <div>Error: {ticket.error}</div> : null}
            {!ticket.loading && ticket.tickets?.length ? (
              <ReactDataTable
                data={ticket.tickets}
                columns={TicketColums}
                expandableRows
                pagination
                actions
              />
            ) : (
              <div>No Tickets found.</div>
            )}
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default GetAllTicketsDatatable;
