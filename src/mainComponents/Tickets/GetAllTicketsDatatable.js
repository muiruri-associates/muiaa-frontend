import React from "react";
import {Button} from 'reactstrap'
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../components/Component";
import { TicketData, TicketColums } from "./TicketsData";
import { Link } from "react-router-dom";

const GetAllTicketsDatatable = () => {
  return (
    <React.Fragment>
    <Head title="My Tickets" />
    <Content page="component">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* First BlockHead */}
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/ticket" icon="arrow-left">
              Back
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              My Tickets
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>
      </div>
      <br />

      <Block size="lg">
        <PreviewCard>
          <ReactDataTable
            data={TicketData}
            columns={TicketColums}
            expandableRows
            pagination
            actions
          />
        </PreviewCard>
      </Block>
    </Content>
  </React.Fragment>
);
}


export default GetAllTicketsDatatable
