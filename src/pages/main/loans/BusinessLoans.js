import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import BusinessLoansDatatable from "../../../mainComponents/Loans/BusinessLoansDatatable";

const BusinessLoans = () => {
  return (
    <React.Fragment>
      <Head title="BusinessLoans" />
      <Content>
        <BusinessLoansDatatable />
      </Content>
    </React.Fragment>
  );
};

export default BusinessLoans;
