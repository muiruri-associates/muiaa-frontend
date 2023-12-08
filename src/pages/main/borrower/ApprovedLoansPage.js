import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import ApprovedLoansDatatable from './../../../mainComponents/Loans/ApprovedLoansDatatable';

const ApprovedLoansPage = () => {
  return (
    <React.Fragment>
      <Head title="Approved Loans" />
      <Content>
        <ApprovedLoansDatatable />
      </Content>
    </React.Fragment>
  );
};

export default ApprovedLoansPage;
