import React from "react";
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
import { TransactionsColumns, TransactionsData } from "./TransactionsData";

const TransactionsDatatable = () => {
  return (
    <React.Fragment>
      <Head title="Transactions" />
      <Content page="component">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* First BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BlockTitle tag="h2" className="fw-normal">
                Transactions
              </BlockTitle>
              <BackTo link="/" icon="arrow-left">
                Back
              </BackTo>
            </BlockHeadContent>
          </BlockHead>
        </div>

        <Block size="lg">
          <PreviewCard>
            <ReactDataTable
              data={TransactionsData}
              columns={TransactionsColumns}
              expandableRows
              pagination
              actions
            />
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default TransactionsDatatable;
