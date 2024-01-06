import React, { useState, useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Col, Row, Card, CardBody, CardHeader, Button, FormGroup, Label, Input } from "reactstrap";
import { BlockBetween, BlockDes, Block, BlockContent, BlockHead, BlockTitle } from "../../components/Component";
import { calculateSubscriptionEndDate, formatToDayMonthYear } from "../../utils/Utils";
import { useWizard } from 'react-use-wizard';

const ReviewPayment = () => {
  const {goToStep} = useWizard()
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");

  
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


  useEffect(() => {
    const storedPaymentMethod = localStorage.getItem("selectedPaymentMethod");
    if (storedPaymentMethod) {
      setPaymentMethod(storedPaymentMethod);
    }
  }, []);

  const handlePaymentSubmission = () => {
    if (paymentMethod === "CARD") {
      // Check if all card details are filled
      if (cardNumber && cardName && expiryDate && cvc) {
        // Proceed with payment submission logic (e.g., API call or further actions)
        console.log("Submitting card payment details:", {
          cardNumber,
          cardName,
          expiryDate,
          cvc,
          totalAmountToPay,
        });
      } else {
        // If any card detail is missing, show an error or take appropriate action
        alert("Please fill in all card details.");
      }
    } else if (paymentMethod === "MPESA") {
      // Check if M-PESA number is filled and terms are agreed
      if (mpesaNumber && agreeTerms) {
        // Proceed with payment submission logic (e.g., API call or further actions)
        console.log("Submitting M-PESA payment details:", {
          mpesaNumber,
          totalAmountToPay,
        });
      } else {
        // If M-PESA number is missing or terms are not agreed, show an error or take appropriate action
        alert("Please fill in M-PESA number and agree to terms.");
      }
    }
    goToStep(3)
    // You can add more conditions for other payment methods if necessary
  };
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
              <br />
              <Row>
              <Col md={4}>
                  <FormGroup>
                    <Label for="cardName">Name</Label>
                    <Input
                      type="text"
                      id="cardName"
                      placeholder="Enter Name"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="expiryDate">Valid Thru</Label>
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
                    <Input type="text" id="cvc" placeholder="CVC" value={cvc} onChange={handleCVCChange} />
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
                <br />

              <Button color="primary" onClick={handlePaymentSubmission} className="w-100 d-flex justify-content-center align-items-center">
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
