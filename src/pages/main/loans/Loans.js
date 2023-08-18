import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LoansDatatable from "../../../mainComponents/Loans/LoansDatatable";

const Loans = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Loans" />
      <Content>
        <p>Loans Page for general layout</p>
        <LoansDatatable />
      </Content>
    </React.Fragment>
  );
};

export default Loans;
