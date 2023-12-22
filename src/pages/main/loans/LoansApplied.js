import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LoansAppliedDatatable from "../../../mainComponents/Loans/LoansAppliedDatatable";

const LoansApplied = () => {
  return (
    <React.Fragment>
      <Head title="Loans Applied" />
      <Content>
        <p>Loans Applied Page for general layout</p>
        <LoansAppliedDatatable />
      </Content>
    </React.Fragment>
  );
};

export default LoansApplied;
