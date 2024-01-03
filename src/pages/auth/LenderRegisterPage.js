import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import FormWizard from '../../mainComponents/FormWizard/FormWizard';

const LenderRegisterPage = () => {
  return (
    <React.Fragment>
      <Head title="LenderRegisterPage" />
      <Content>
        {/* <RegisterLender /> */}
        <FormWizard />
      </Content>
    </React.Fragment>
  );
};

export default LenderRegisterPage;
