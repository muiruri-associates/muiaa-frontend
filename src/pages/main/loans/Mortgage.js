import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import MortgageDatatable from "../../../mainComponents/Loans/MortgageDatatable";

const Mortgage = () => {
  return (
    <React.Fragment>
      <Head title="Mortgage" />
      <Content>
        <MortgageDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Mortgage;
