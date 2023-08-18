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
import { rolesColumns } from "./AccessControlData";
import { Link } from "react-router-dom";

import {fetchRoles} from "../../redux/actions/rolesActions";

const RolesDatatable = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.roles);
  console.log("data on component", role);

  useEffect(() => {
    dispatch(fetchRoles());
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
                Roles
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          {/* Second BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <Button>
                <Link to={`${process.env.PUBLIC_URL}/create-lender-organizations`}>
                  Create Role
                </Link>
              </Button>
            </BlockHeadContent>
          </BlockHead>
        </div>

        <Block size="lg">
          <PreviewCard>
            {role.loading && <div>Loading...</div>}
            {!role.loading && role.error ? (
              <div>Error: {role.error}</div>
            ) : null}
            {!role.loading && role.roles?.length ? (
              <ReactDataTable data={role.roles} columns={rolesColumns} pagination actions />
            ) : (
              <div>No Role found.</div>
            )}
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default RolesDatatable;
