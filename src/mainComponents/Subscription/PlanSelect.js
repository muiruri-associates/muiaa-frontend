import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Badge, Button } from "reactstrap";
import { useWizard } from "react-use-wizard";
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
import Logo1 from "../../images/icons/plan-s1.svg";
import Logo2 from "../../images/icons/plan-s2.svg";
// import Logo3 from "../../images/icons/plan-s3.svg";
import { Card } from "reactstrap";
// import { PlanSelectDataV1, PlanSelectDataV2 } from "./PlanSelectData";

const PlanSelect = () => {
  const { goToStep } = useWizard();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planDetails) => {
    setSelectedPlan(planDetails);
    localStorage.setItem("selectedPlan", JSON.stringify(planDetails));
    goToStep(1)
  };
  return (
    <React.Fragment>
      <Head title="Pricing Table"></Head>
      <Content>
        <Block size="lg">
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockContent>
                <BlockTitle>Pricing Table</BlockTitle>
                <BlockDes className="text-soft">
                  <p>Choose your pricing plan and start enjoying our service.</p>
                </BlockDes>
              </BlockContent>
            </BlockBetween>
          </BlockHead>
          <Row className="g-gs">
            <Col md={6} xxl={3} key="1">
              <Card className={`card-bordered pricing text-center "recommend" : ""}`}>
                {/* <Badge color="primary" className="pricing-badge">
                        Recommend
                      </Badge> */}
                <div className="pricing-body">
                  <div className="pricing-media">
                    <img src={Logo1} alt="#" />
                  </div>
                  <div className="pricing-title w-220px mx-auto">
                    <h5 className="title">BASIC</h5>
                    <span className="sub-text">You Get access To 15 High Quality Leads</span>
                  </div>
                  <div className="pricing-amount">
                    <div className="amount">
                      Ksh. 7,700 <span>/mo</span>
                    </div>
                    <span className="bill">Billed Monthly</span>
                  </div>
                  <div className="pricing-action">
                    <Button
                      color="primary"
                      onClick={() =>
                        handlePlanSelect({
                          title: "BASIC",
                          amount: "Ksh. 7,700",
                          // Other plan details you want to store
                        })
                      }
                    >
                      Select Plan
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xxl={3} key="1">
              <Card className={`card-bordered pricing text-center "recommend" : ""}`}>
                <Badge color="primary" className="pricing-badge">
                  Recommend
                </Badge>
                <div className="pricing-body">
                  <div className="pricing-media">
                    <img src={Logo2} alt="#" />
                  </div>
                  <div className="pricing-title w-220px mx-auto">
                    <h5 className="title">PREMIUM</h5>
                    <span className="sub-text">You Get Access To 30 Premium Leads</span>
                  </div>
                  <div className="pricing-amount">
                    <div className="amount">
                      13,300 <span>/mo</span>
                    </div>
                    <span className="bill">Billed Monthly</span>
                  </div>
                  <div className="pricing-action">
                    <Button
                      color="primary"
                      onClick={() =>
                        handlePlanSelect({
                          title: "PREMIUM",
                          amount: "Ksh. 13,300",
                          // Other plan details you want to store
                        })
                      }
                    >
                      Select Plan
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PlanSelect;
