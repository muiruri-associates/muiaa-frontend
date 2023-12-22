import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import UserProfileLayout from "../../../mainComponents/Profile/UserProfileLayout";

const Profile = () => {
  return (
    <React.Fragment>
      <Head title="Profile" />
      <Content>
        <p>Profile Page for general layout</p>
        <UserProfileLayout />
      </Content>
    </React.Fragment>
  );
};

export default Profile;
