import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import RequestedLoanDatatable from "../../../mainComponents/Loans/RequestedLoansDatatable";

const RequestedLoansPage = () => {
  return (
    <React.Fragment>
      <Head title="Requested Loans" />
      <Content>
        <RequestedLoanDatatable />
      </Content>
    </React.Fragment>
  );
};

export default RequestedLoansPage;
