import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import UsersDatatable from "../../../mainComponents/Users/UsersDatatable";

const Users = () => {
  return (
    <React.Fragment>
      <Head title="Users" />
      <Content>
        <p>View Users Page for general layout</p>
        <UsersDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Users;
