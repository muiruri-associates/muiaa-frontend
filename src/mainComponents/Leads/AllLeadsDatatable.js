import React, {useEffect} from "react";
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
import { AllLeadsdataTableColumns } from "./AllTableData";
import { getAllAvailableLeads } from "../../redux/actions/leadsActions"

const AllLeadsAppliedDatatable = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.leads);
  console.log('Leads on component', leads)

  useEffect(() => {
    dispatch(getAllAvailableLeads())
  }, [dispatch])
  
  return (
    <React.Fragment>
    <Head title="Loans" />
    <Content page="component">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* First BlockHead */}
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/" icon="arrow-left">
              Back
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
               Leads
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>
      </div>

      <Block size="lg">
        <PreviewCard>
        {leads.loading && <div>Loading...</div>}
            {!leads.loading && leads.error ? (
              <div>Error: {leads.error}</div>
            ) : null}
            {!leads.loading && leads.leads?.length ? (
              <ReactDataTable data={leads.leads} columns={AllLeadsdataTableColumns} pagination actions />
            ) : (
              <div>No leads found.</div>
            )}
          {/* <ReactDataTable
            data={AllLeadsDataTableData}
            columns={AllLeadsdataTableColumns}
            expandableRows
            pagination
            actions
          /> */}
        </PreviewCard>
      </Block>
    </Content>
  </React.Fragment>
);
}

export default AllLeadsAppliedDatatable