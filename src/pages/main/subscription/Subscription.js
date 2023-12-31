import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LenderSubscriptions from "../../../mainComponents/Subscription/LenderSubscriptions";

const Subscription = () => {
  return (
    // <StepsProvider>
      <React.Fragment>
      <Head title="Subscription" />
      <Content>
        <LenderSubscriptions />
      </Content>
      </React.Fragment>
    // </StepsProvider>
  );
};

export default Subscription;
