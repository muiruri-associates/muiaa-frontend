import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import FormWizard from "../../../mainComponents/FormWizard/FormWizard";
import { StepsProvider } from 'react-step-builder';

const Subscription = () => {
  return (
    // <StepsProvider>
      <React.Fragment>
      <Head title="Subscription" />
      <Content>
        <FormWizard />
      </Content>
      </React.Fragment>
    // </StepsProvider>
  );
};

export default Subscription;
