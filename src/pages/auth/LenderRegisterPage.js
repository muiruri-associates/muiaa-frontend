import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import RegisterLender from "../../mainComponents/Auth/RegisterLenderForm";

const LenderRegisterPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="LenderRegisterPage" />
      <Content>
        <RegisterLender />
      </Content>
    </React.Fragment>
  );
};

export default LenderRegisterPage;
