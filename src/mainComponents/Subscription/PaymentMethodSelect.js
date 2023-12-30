import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Badge, Button } from "reactstrap";
import {
  BlockBetween,
  BlockDes,
  Block,
  BlockContent,
  BlockHead,
  BlockTitle,
  Col,
  Row,
} from "../../components/Component";
import Card1 from "../../images/card.svg";
import Mpesa from "../../images/mpesa.svg";
import Logo3 from "../../images/icons/plan-s3.svg";
import { Card } from "reactstrap";
// import { PaymentMethodSelectDataV1, PaymentMethodSelectDataV2 } from "./PaymentMethodSelectData";

const PaymentMethodSelect = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    localStorage.setItem("selectedPaymentMethod", method);
  };
  return (
    <React.Fragment>
      <Head title="Pricing Table"></Head>
      <Content>
        <Block size="lg">
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockContent>
                <BlockTitle>Payment Method</BlockTitle>
                <BlockDes className="text-soft">
                  <p>Secure money transfer using your bank account. We support Mastercard, VISA, & M-Pesa.</p>
                </BlockDes>
              </BlockContent>
            </BlockBetween>
          </BlockHead>
          <Row className="g-gs">
            <Col md={4} xxl={3} key="1">
            <Card
            className={`card-bordered pricing text-center ${
              selectedMethod === "CARD" ? "recommend" : ""
            }`}
          >
                <div className="pricing-body">
                  <div className="card">
                    <img src={Card1} alt="#" />
                  </div>
                </div>
                  <div className="pricing-action">
                  <Button
                color="primary"
                className="w-100"
                onClick={() => handleMethodSelect("CARD")}
              >
                PAY WITH CARD
              </Button>
                  </div>
              </Card>
            </Col>
            <Col md={4} xxl={3} key="1">
            <Card
            className={`card-bordered pricing text-center ${
              selectedMethod === "MPESA" ? "recommend" : ""
            }`}
          >
                {/* <Badge color="primary" className="pricing-badge">
                  Recommend
                </Badge> */}
                <div className="pricing-body">
                  <div className="mpesa">
                    <img src={Mpesa} alt="#" />
                  </div>
                </div>
                  <div className="pricing-action">
                  <Button
                color="primary"
                className="w-100"
                onClick={() => handleMethodSelect("MPESA")}
              >
                LIPA NA M-PESA
              </Button>
                  </div>
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PaymentMethodSelect;
