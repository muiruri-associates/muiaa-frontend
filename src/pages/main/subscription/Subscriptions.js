import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import AllSubscriptions from "../../../mainComponents/Subscription/AllSubscriptions";

const Subscriptions = () => {
  return (
    // <StepsProvider>
      <React.Fragment>
      <Head title="Subscriptions" />
      <Content>
        <AllSubscriptions />
      </Content>
      </React.Fragment>
    // </StepsProvider>
  );
};

export default Subscriptions;
