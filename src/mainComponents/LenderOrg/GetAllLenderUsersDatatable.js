import React from "react";
import { Button } from "reactstrap";
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
import { DataTableData, dataTableColumns } from "./AllTableData";
import { Link } from "react-router-dom";

const GetAllLenderUsersDatatable = () => {
  return (
    <React.Fragment>
      <Head title="Lender Users" />
      <Content page="component">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* First BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BackTo link="/" icon="arrow-left">
                Back
              </BackTo>
              <BlockTitle tag="h2" className="fw-normal">
                Lender Users
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          {/* Second BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <Button>
                <Link to={`${process.env.PUBLIC_URL}/create-lender-user`}>
                  Create LenderUser
                </Link>
              </Button>
            </BlockHeadContent>
          </BlockHead>
        </div>

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
};

export default GetAllLenderUsersDatatable;
