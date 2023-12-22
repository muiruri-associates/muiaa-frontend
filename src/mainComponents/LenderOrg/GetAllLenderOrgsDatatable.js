import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { dataTableColumns } from "./AllTableData";
import { Link } from "react-router-dom";

import { fetchData } from "../../redux/actions/lenderOrgActions";

const GetAllLenderOrgsDatatable = () => {
  const dispatch = useDispatch();
  const lenderOrg = useSelector((state) => state.lenderOrg);
  console.log("data on component", lenderOrg);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* First BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BackTo link="/" icon="arrow-left">
                Back
              </BackTo>
              <BlockTitle tag="h2" className="fw-normal">
                Lender Organization
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          {/* Second BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <Button>
                <Link to={`${process.env.PUBLIC_URL}/create-lender-organizations`}>
                  Create Lender Org
                </Link>
              </Button>
            </BlockHeadContent>
          </BlockHead>
        </div>

        <Block size="lg">
          <PreviewCard>
            {lenderOrg.loading && <div>Loading...</div>}
            {!lenderOrg.loading && lenderOrg.error ? (
              <div>Error: {lenderOrg.error}</div>
            ) : null}
            {!lenderOrg.loading && lenderOrg.lenderOrgs?.length ? (
              <ReactDataTable
                data={lenderOrg.lenderOrgs}
                columns={dataTableColumns}
                pagination
                actions
              />
            ) : (
              <div>No lender organizations found.</div>
            )}
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default GetAllLenderOrgsDatatable;
