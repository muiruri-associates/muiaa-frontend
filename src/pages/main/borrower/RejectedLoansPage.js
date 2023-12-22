import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import RejectedLoanDatatable from "../../../mainComponents/Loans/RejectedLoansDatatable";

const RejectedLoansPage = () => {
  return (
    <React.Fragment>
      <Head title="Rejected Loans" />
      <Content>
        <RejectedLoanDatatable />
      </Content>
    </React.Fragment>
  );
};

export default RejectedLoansPage;
