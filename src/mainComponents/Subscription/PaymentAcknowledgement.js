import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Col, Row, Card, CardBody, CardHeader, Button } from "reactstrap";
import { BlockBetween, BlockDes, Block, BlockContent, BlockHead, BlockTitle } from "../../components/Component";
// import { PaymentAcknowledDataV1, PaymentAcknowledDataV2 } from "./PaymentAcknowledData";

const PaymentAcknowledgement = () => {
  const transactionId = "January 1, 2024";
  const nextPaymentDue = "$50";
  const totalAmountToPay = "$52.50";

  return (
    <React.Fragment>
      <Head title="Pricing Table"></Head>
      <Content>
        <Block size="lg">
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockContent>
                <BlockTitle>Payment Acknowledgement</BlockTitle>
                <BlockDes className="text-soft">
                  <p>Secure money transfer using your bank account. We support Mastercard, VISA, & M-Pesa.</p>
                </BlockDes>
              </BlockContent>
            </BlockBetween>
          </BlockHead>
          <Card>
            <CardHeader>
              <h5 className="mb-0">Checkout Review</h5>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-sm-6">Transaction #ID</dt>
                <dd className="col-sm-6">{transactionId}</dd>

                <dt className="col-sm-6">Next Payment Due</dt>
                <dd className="col-sm-6">{nextPaymentDue}</dd>

                <dt className="col-sm-6">Total Amount to Pay</dt>
                <dd className="col-sm-6">{totalAmountToPay}</dd>


              </dl>
                {/* Button Row */}
          <Row className="justify-content-center">
            <Col sm={6} className="text-center">
              <Button color="primary">
                DOWNLOAD INVOICE
              </Button>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-center">
            <Col sm={6} className="text-center">
              <Button color="primary">
                GO TO DASHBOARD
              </Button>
            </Col>
          </Row>
            </CardBody>
          </Card>

        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PaymentAcknowledgement;
