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
import { usersColumns } from "./UserData";
import { Link } from "react-router-dom";

import {fetchUsers} from "../../redux/actions/usersActions";

const UsersDatatable = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  console.log("data on component", user);

  useEffect(() => {
    dispatch(fetchUsers());
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
                users
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          {/* Second BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <Button>
                <Link to={`${process.env.PUBLIC_URL}/create-lender-organizations`}>
                  Create user
                </Link>
              </Button>
            </BlockHeadContent>
          </BlockHead>
        </div>

        <Block size="lg">
          <PreviewCard>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? (
              <div>Error: {user.error}</div>
            ) : null}
            {!user.loading && user.users?.length ? (
              <ReactDataTable data={user.users} columns={usersColumns} pagination actions />
            ) : (
              <div>No user found.</div>
            )}
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default UsersDatatable;
