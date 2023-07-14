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
import { DataTableData, dataTableColumns } from "./AllTableData";

const GetAllLenderOrgsDatatable = () => {
  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/" icon="arrow-left">
              Back
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Lender Organizations
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>


        <Block size="lg">
          <PreviewCard>
            <ReactDataTable
              data={DataTableData}
              columns={dataTableColumns}
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

export default GetAllLenderOrgsDatatable
