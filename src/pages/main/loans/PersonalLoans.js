import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import PersonalLoansDatatable from "../../../mainComponents/Loans/PersonalLoansDatatable";

const PersonalLoan = () => {
  return (
    <React.Fragment>
      <Head title="PersonalLoan" />
      <Content>
        <PersonalLoansDatatable />
      </Content>
    </React.Fragment>
  );
};

export default PersonalLoan;
