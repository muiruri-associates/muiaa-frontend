import React from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import {
  Block,
  PreviewCard,
  Icon
} from "../../components/Component";
import { Wizard, useWizard } from "react-use-wizard";
import RegisterLender from "../Auth/RegisterLenderForm";
import PlanSelect from "../Subscription/PlanSelect";
import PaymentMethodSelect from "../Subscription/PaymentMethodSelect";
import ReviewPayment from "../Subscription/ReviewPayment";
import PaymentAcknowledgement from "../Subscription/PaymentAcknowledgement";

const HeaderSteps = () => {
  const { activeStep, goToStep } = useWizard();

  const steps = ["Register", "Plan", "Payment Method", "Payment Review", "Payment Acknowledgement"]; // Define your steps here

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            borderBottom: "2px solid",
            padding: "5px",
            cursor: "pointer",
            fontWeight: activeStep === index ? "bold" : "normal",
          }}
          onClick={() => goToStep(index)}
        >
          {step}
          <span>
          <Icon name="forward-ios" />
          </span>
        </div>
      ))}
    </div>
  );
};


// const Success = (props) => {
//   return (
//     <div className="d-flex justify-content-center align-items-center p-3">
//       <BlockTitle tag="h6" className="text-center">
//         Thank you for submitting form
//       </BlockTitle>
//     </div>
//   );
// };


const FormWizard = () => {

  return (
    <React.Fragment>
      <Head title="Wizard Form" />
      <Content page="component">
        <Block size="lg">
          <PreviewCard>
            <div className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
              <Wizard header={<HeaderSteps />}>
                <RegisterLender />
                <PlanSelect />
                <PaymentMethodSelect />
                <ReviewPayment />
                <PaymentAcknowledgement />
              </Wizard>
            </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormWizard;
