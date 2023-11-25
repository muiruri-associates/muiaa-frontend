import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from "../../components/Component";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Head title="Dashboard" />
      <Content>
        <BlockHead size="sm">
          <div className="nk-block-between">
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Account Overview
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to MUIAA Pesa.</p>
              </BlockDes>
            </BlockHeadContent>
          </div>
        </BlockHead>
      </Content>
    </React.Fragment>
  );
};

export default Dashboard;
