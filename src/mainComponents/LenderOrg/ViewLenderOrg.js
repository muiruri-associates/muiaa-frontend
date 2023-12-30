import React, { useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Badge, Card } from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
} from "../../components/Component";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLenderOrgById } from "../../redux/actions/lenderOrgActions";

const ViewLenderOrg = () => {
  const { id } = useParams();
  console.log('id', id)
  const dispatch = useDispatch();
  const lenderOrg = useSelector(state => state.lenderOrg.lenderOrg);
  console.log('lenderOrg', lenderOrg)
  // const {} = lenderOrg;
  const loading = useSelector(state => state.lenderOrg.loading);
  const error = useSelector(state => state.lenderOrg.error);

  useEffect(() => {
    dispatch(fetchLenderOrgById(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!lenderOrg) {
    return <div>Lender organization not found.</div>;
  }

  return (
    <React.Fragment>
      <Head title="KYC Details - Regular"></Head>
        <Content>
          <BlockHead size="sm">
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle page>
                  Lender Organization Profile/KYC
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Lender Organization ID: <span className="text-base">{lenderOrg._id}</span>
                    </li>
                    <li>
                      Created At: <span className="text-base">{lenderOrg.createdAt}</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/lender-organizations`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <Row className="gy-5">
              <Col lg="5">
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Application Info</BlockTitle>
                    <p>Submission date, approve date, status etc.</p>
                  </BlockHeadContent>
                </BlockHead>
                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Submitted At</div>
                        <div className="data-value">{lenderOrg.createdAt}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Status</div>
                        <div className="data-value">
                          <Badge
                            size="sm"
                            color={
                                lenderOrg.status === "Approved"
                                ? "outline-success"
                                : lenderOrg.status === "Pending"
                                ? "outline-info"
                                : "outline-danger"
                            }
                            className="badge-dim"
                          >
                            {lenderOrg.status}
                          </Badge>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card>
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Uploaded Documents</BlockTitle>
                    <p>Here is user uploaded documents.</p>
                  </BlockHeadContent>
                </BlockHead>

                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Document Type</div>
                        <div className="data-value">userdoc</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Front Side</div>
                        <div className="data-value">userdoc</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Back Side</div>
                        <div className="data-value">userdoc</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Proof/Selfie</div>
                        <div className="data-value">userdoc</div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Col>

              <Col lg="7">
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Lender Organization Information</BlockTitle>
                    <p>Basic info, like name, phone, address, country etc.</p>
                  </BlockHeadContent>
                </BlockHead>
                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Business Name</div>
                        <div className="data-value">{lenderOrg.business_name}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Business Address</div>
                        <div className="data-value">{lenderOrg.business_address}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Business Email Address</div>
                        <div className="data-value">{lenderOrg.business_email}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Phone Number</div>
                        <div className="data-value text-soft">
                          <em>Not available</em>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Business Location</div>
                        <div className="data-value">{lenderOrg.business_location}</div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Block>
        </Content>
    </React.Fragment>
  );
};
export default ViewLenderOrg;
