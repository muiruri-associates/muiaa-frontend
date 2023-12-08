import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../components/Component";
import { AllLeadsDataTableData, AllLeadsdataTableColumns, dataTableColumns } from "./AllTableData";

const AllLeadsAppliedDatatable = () => {
  return (
    <React.Fragment>
    <Head title="Loans" />
    <Content page="component">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* First BlockHead */}
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/" icon="arrow-left">
              Back
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
               Leads
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>
      </div>

      <Block size="lg">
        <PreviewCard>
          <ReactDataTable
            data={AllLeadsDataTableData}
            columns={AllLeadsdataTableColumns}
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

export default AllLeadsAppliedDatatable