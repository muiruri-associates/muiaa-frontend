import React from "react";
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
import { DataTableData, dataTableColumns } from "./AllLoanData";

const LoansDatatable = () => {
  return (
    <React.Fragment>
      <Head title="Loans" />
      <Content page="component">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          {/* First BlockHead */}{" "}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BlockTitle tag="h2" className="fw-normal">
                Loans{" "}
              </BlockTitle>{" "}
            </BlockHeadContent>{" "}
          </BlockHead>{" "}
        </div>
        <Block size="lg">
          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination actions />
          </PreviewCard>{" "}
        </Block>{" "}
      </Content>{" "}
    </React.Fragment>
  );
};

export default LoansDatatable;
