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
import { dataTableColumns } from "./AccessControlData";
import { Link } from "react-router-dom";

import {fetchPermissions} from "../../redux/actions/permissionsActions";

const PermissionsDatatable = () => {
  const dispatch = useDispatch();
  const permission = useSelector((state) => state.permissions);
  console.log("data on component", permission);

  useEffect(() => {
    dispatch(fetchPermissions());
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
                Permissions
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          {/* Second BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <Button>
                <Link to={`${process.env.PUBLIC_URL}/permissions/create`}>
                  Create Permission
                </Link>
              </Button>
            </BlockHeadContent>
          </BlockHead>
        </div>

        <Block size="lg">
          <PreviewCard>
            {permission.loading && <div>Loading...</div>}
            {!permission.loading && permission.error ? (
              <div>Error: {permission.error}</div>
            ) : null}
            {!permission.loading && permission.permissions?.length ? (
              <ReactDataTable data={permission.permissions} columns={dataTableColumns} pagination actions />
            ) : (
              <div>No lender organizations found.</div>
            )}
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PermissionsDatatable;
