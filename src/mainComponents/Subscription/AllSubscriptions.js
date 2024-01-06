import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../components/Component";
import { dataTableColumns } from "./SubscriptionData";
import { getAllSubscriptions } from "../../redux/actions/subscriptionActions";


const AllSubscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state) => state.subscription);
  console.log("data on component", subscriptions);

  useEffect(() => {
    dispatch(getAllSubscriptions());
  }, [dispatch]);
  return (
    <React.Fragment>
    <Head title="Lender Users" />
    <Content page="component">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* First BlockHead */}
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/" icon="arrow-left">
              Back
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              All Subscriptions
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>
      </div>

      <Block size="lg">
        <PreviewCard>
        {subscriptions.loading && <div>Loading...</div>}
        {!subscriptions.loading && subscriptions.error ? (
              <div>Error: {subscriptions.error}</div>
            ) : null}
        {!subscriptions.loading && subscriptions.subscriptions?.length ? (
              <ReactDataTable data={subscriptions.subscriptions} columns={dataTableColumns} pagination actions />
            ) : (
              <div>No Subscriptions Available.</div>
            )}
        </PreviewCard>
      </Block>
    </Content>
  </React.Fragment>
);
}


export default AllSubscriptions
