import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Card } from "reactstrap";
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
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchLenderOrgById } from "../../redux/actions/lenderOrgActions";

const ViewLoan = () => {
  // const { id } = useParams();
  // console.log('id', id)
  // const dispatch = useDispatch();
  // const lenderOrg = useSelector(state => state.lenderOrg.lenderOrg);
  // console.log('lenderOrg', lenderOrg)
  // // const {} = lenderOrg;
  // const loading = useSelector(state => state.lenderOrg.loading);
  // const error = useSelector(state => state.lenderOrg.error);

  // useEffect(() => {
  //   dispatch(fetchLenderOrgById(id));
  // }, [dispatch, id]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!lenderOrg) {
  //   return <div>Lender organization not found.</div>;
  // }

  const [isBlurred, setIsBlurred] = useState(true);
  const [_, setIsUnlocked] = useState(false);

  // const unlockContent = () => {
  //   setIsBlurred(false);
  //   setIsUnlocked(true);
  // };

  const placeholder = () => (
    <p style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      opacity: 0.7,
    }}>This content is hidden. Unlock it to view.</p>
  )

  return (
    <React.Fragment>
      <Head title="KYC Details - Regular"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween className="g-3">
            <BlockHeadContent>
              <BlockTitle page>Loan Details</BlockTitle>
              <BlockDes className="text-soft">
                <ul className="list-inline">
                  <li>
                    Loan ID: <span className="text-base">fdjwof</span>
                  </li>
                  <li>
                    Created At: <span className="text-base">time</span>
                  </li>
                </ul>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <Link to={`/loans`}>
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
                  <BlockTitle tag="h5">User Info</BlockTitle>
                  <p>Basic info, like name, phone, address, country etc.</p>
                </BlockHeadContent>
              </BlockHead>
              <Card className="card-bordered">
                <ul className="data-list is-compact">
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">First Name</div>
                      <div className="data-value">fname</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Last Name</div>
                      <div className="data-value">lname</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Email</div>
                      <div className="data-value">email</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">ID or Passport Number</div>
                      <div className="data-value">lname</div>
                    </div>
                  </li>
                </ul>
              </Card>

              <BlockHead>
                <BlockHeadContent>
                  <BlockTitle tag="h5">User Documents</BlockTitle>
                  <p>Here are user uploaded documents.</p>
                </BlockHeadContent>
              </BlockHead>

              <Card
                style={{
                  filter: isBlurred ? "blur(5px)" : "none", 
                }}
                className="card-bordered"
              >
                {isBlurred ? placeholder (
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">ID Card Front</div>
                        <div className="data-value">
                          <a href="id front" download>
                            ID Front Side
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">ID Card Back</div>
                        <div className="data-value">
                          <a href="id back" download>
                            ID Back Side
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                ) : (
                  <p>Content not paid for</p>
                )}
              </Card>
              <BlockHead>
                <BlockHeadContent>
                  <BlockTitle tag="h5">Asset Documents</BlockTitle>
                  <p>Here are Asset Documents.</p>
                </BlockHeadContent>
              </BlockHead>

              <Card
                style={{
                  filter: isBlurred ? "blur(5px)" : "none", 
                }}
                className="card-bordered"
              >
                {isBlurred ? (
                <ul className="data-list is-compact">
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Title Deed</div>
                      <div className="data-value">
                        <a href="title" download>
                          Title Deed
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Car Logbook</div>
                      <div className="data-value">
                        <a href="car" download>
                          Car Logbook
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                 ) : (
                  <p>Content not paid for</p>
                )}
              </Card>
            </Col>

            <Col lg="7">
              <BlockHead>
                <BlockHeadContent>
                  <BlockTitle tag="h5">Loan Info</BlockTitle>
                  <p>Loan Type, Loan Amount, Date Applied, Status</p>
                </BlockHeadContent>
              </BlockHead>
              <Card
                style={{
                  filter: isBlurred ? "blur(5px)" : "none", 
                }}
                className="card-bordered"
              >
                {isBlurred ? (
                <ul className="data-list is-compact">
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Loan Type</div>
                      <div className="data-value">name</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Loan Amount</div>
                      <div className="data-value">Ksh. 4,000</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Applied On</div>
                      <div className="data-value">email</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Status</div>
                      <div className="data-value">Pending</div>
                    </div>
                  </li>
                </ul>
                ) : (
                  <p>Content not paid for</p>
                )}
              </Card>
              <BlockHead>
                <BlockHeadContent>
                  <BlockTitle tag="h5">Income Documents</BlockTitle>
                  <p>Here are Income documents.</p>
                </BlockHeadContent>
              </BlockHead>

              <Card
                style={{
                  filter: isBlurred ? "blur(5px)" : "none", 
                }}
                className="card-bordered"
              >
                {isBlurred ? (
                <ul className="data-list is-compact">
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Bank Statement</div>
                      <div className="data-value">
                        <a href="#" download>
                          Bank Statement
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">M-Pesa Statement</div>
                      <div className="data-value">
                        <a href="mpesa" download>
                          M-Pesa Statement
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">KRA PIN</div>
                      <div className="data-value">
                        <a href="#" download>
                          KRA PIN
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                ) : (
                  <p>Content not paid for</p>
                )}
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default ViewLoan;
