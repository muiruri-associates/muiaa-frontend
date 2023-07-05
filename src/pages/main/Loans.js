import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Loans = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Loans" />
      <Content>
        <p>Loans Page for general layout</p>
      </Content>
    </React.Fragment>
  );
};

export default Loans;
