import React, { useState, useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Col, Row, Card, CardBody, CardHeader, Button, FormGroup, Label, Input } from "reactstrap";
import { BlockBetween, BlockDes, Block, BlockContent, BlockHead, BlockTitle } from "../../components/Component";

const ReviewPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [paybill, setPaybill] = useState("");
  const [account_number, setAccount_Number] = useState("");

  const calculateSubscriptionEndDate = (startDate, months) => {
    const date = new Date(startDate); // Convert the start date string to a Date object
    date.setMonth(date.getMonth() + months); // Add the specified number of months
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options); // Format the date to your desired format
  };

  const formatToDayMonthYear = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  
  const currentDate = Date.now();
  const subscriptionStart = formatToDayMonthYear(currentDate)
  const subscriptionEnd = calculateSubscriptionEndDate(subscriptionStart, 1);
  const subscriptionFee = "Ksh. 7700";
  const taxPercentage = "5%";
  const totalAmountToPay = "Ksh. 11550";
  
  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };
  
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVCChange = (e) => {
    setCVC(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setMpesaNumber(e.target.value)
  }

  const handlePayBillChange = (e) => {
    setPaybill(e.target.value)
  }

  const handleAccountNumberChange = (e) => {
    setAccount_Number(e.target.value)
  }

  useEffect(() => {
    const storedPaymentMethod = localStorage.getItem("selectedPaymentMethod");
    if (storedPaymentMethod) {
      setPaymentMethod(storedPaymentMethod);
    }
  }, []);
  return (
    <React.Fragment>
      <Head title="Pricing Table"></Head>
      <Content>
        <Block size="lg">
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockContent>
                <BlockTitle>Payment Review</BlockTitle>
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
                <dt className="col-sm-6">Subscription Start</dt>
                <dd className="col-sm-6">{subscriptionStart}</dd>

                <dt className="col-sm-6">Subscription End</dt>
                <dd className="col-sm-6">{subscriptionEnd}</dd>

                <dt className="col-sm-6">Subscription Fee</dt>
                <dd className="col-sm-6">{subscriptionFee}</dd>

                <dt className="col-sm-6">Tax Percentage</dt>
                <dd className="col-sm-6">{taxPercentage}</dd>

                <dt className="col-sm-6">Total Amount to Pay</dt>
                <dd className="col-sm-6">{totalAmountToPay}</dd>
              </dl>
            </CardBody>
          </Card>
          {paymentMethod === "CARD" &&(
            <Card>
            <CardHeader>
              <h5 className="mb-0">Card Review</h5>
            </CardHeader>
            <CardBody>
              {/* <Row> */}
              <Row>
                <Col md={8}>
                  <FormGroup>
                    <Label for="cardNumber">Card Number</Label>
                    <Input
                      type="text"
                      id="cardNumber"
                      placeholder="Enter card number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col md={4}>
                  <FormGroup>
                    <Label for="cardName">M-PESA NUMBER</Label>
                    <Input
                      type="text"
                      id="cardName"
                      placeholder="Enter M-PESA NUMBER"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="expiryDate">Expiration Date</Label>
                    <Input
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="cvc">CVC</Label>
                    <Input type="text" id="cvc" placeholder="Enter CVC" value={cvc} onChange={handleCVCChange} />
                  </FormGroup>
                </Col>
              </Row>
                <br />

              <Button color="primary" className="w-100 d-flex justify-content-center align-items-center">
                Pay Now ({totalAmountToPay})
              </Button>
            </CardBody>
          </Card>
          )}
          
          {paymentMethod === "MPESA" &&(
            <Card>
            <CardHeader>
              <h5 className="mb-0">MPESA Review</h5>
            </CardHeader>
            <CardBody>
              {/* <Row> */}
              <Row>
                <Col md={8}>
                  <FormGroup>
                    <Label for="mpesaNumber">M-PESA NUMBER</Label>
                    <Input
                      type="text"
                      id="mpesaNumber"
                      placeholder="Enter M-PESA NUMBER"
                      value={mpesaNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col md={4}>
                  <FormGroup>
                    <Label for="paybill">PAYBILL</Label>
                    <Input
                      type="text"
                      id="paybill"
                      placeholder="Enter Paybill"
                      value={paybill}
                      onChange={handlePayBillChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="account_number">ACCOUNT NUMBER</Label>
                    <Input
                      type="text"
                      id="account_number"
                      placeholder="Account Number"
                      value={account_number}
                      onChange={handleAccountNumberChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
                <br />

              <Button color="primary" className="w-100 d-flex justify-content-center align-items-center">
                Pay Now ({totalAmountToPay})
              </Button>
              <hr />
              <FormGroup check className="mb-0">
                <Label check>
                  <Input type="checkbox" checked={agreeTerms} onChange={handleAgreeTermsChange} />{" "}
                  I agree to the terms and services
                </Label>
              </FormGroup>
            </CardBody>
          </Card>
          )}
          
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ReviewPayment;
