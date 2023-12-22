import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import TransactionsDatatable from "../../../mainComponents/Transactions/TransactionsDatatable";

const TransactionsLoansPage = () => {
  return (
    <React.Fragment>
      <Head title="Transactions Loans" />
      <Content>
        <TransactionsDatatable />
      </Content>
    </React.Fragment>
  );
};

export default TransactionsLoansPage;
