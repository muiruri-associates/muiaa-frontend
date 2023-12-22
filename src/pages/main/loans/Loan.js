import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import ViewLoan from "../../../mainComponents/Loans/ViewLoan";

const Loan = () => {
  return (
    <React.Fragment>
      <Head title="Loan" />
      <Content>
        <p>Loan Page for general layout</p>
        <ViewLoan />
      </Content>
    </React.Fragment>
  );
};

export default Loan;
