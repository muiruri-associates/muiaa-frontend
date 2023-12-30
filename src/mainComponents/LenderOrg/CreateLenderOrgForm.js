import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form,
  FormGroup,
  Label,
  Row,
  Col,
  Button
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  OverlineTitle,
} from "../../components/Component";
import { createLenderOrg } from "../../redux/actions/lenderOrgActions";

const CreateLenderOrgForm = () => {
  const dispatch = useDispatch();
  
  // State to manage form inputs
  const [business_name, setBusiness_Name] = useState("");
  const [business_address, setBusiness_Address] = useState("");
  const [business_email, setBusiness_Email] = useState("");
  const [business_phone_number, setBusiness_Phone_Number] = useState("");
  const [business_location, setBusiness_Location] = useState("");

   // State to manage form submission status
   const [_, setIsSubmitted] = useState(false);

  // Function to handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !business_name ||
    !business_address ||
    !business_email ||
    !business_phone_number ||
    !business_location
  ) {
    toast.error("Please fill out all fields.");
    return;
  }

  const lenderOrgData = {
    business_name,
    business_address,
    business_email,
    business_phone_number,
    business_location
  };
  
  try {
    await dispatch(createLenderOrg(lenderOrgData));
    console.log('data>>', lenderOrgData)
    setBusiness_Name("");
    setBusiness_Address("");
    setBusiness_Email("");
    setBusiness_Phone_Number("");
    setBusiness_Location("");
    setIsSubmitted(true);
    toast.success("Lender organization created successfully!");
  } catch (error) {
    // Handle submission error here
    toast.error("Error creating lender organization.");
  }
};
  return (
    <React.Fragment>
      <Block size="lg">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Create New Lender Org</BlockTitle>
          </BlockHeadContent>
        </BlockHead>
        <PreviewCard>
          <OverlineTitle tag="span" className="preview-title-lg">
            {" "}
            Default Preview{" "}
          </OverlineTitle>
          <Row className="gy-4">
            <Form>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="default-0" className="form-label">
                      Business Name
                    </Label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="text" id="default-0" placeholder="Business Name" value={business_name} onChange={(e) => setBusiness_Name(e.target.value)} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="default-0" className="form-label">
                      Business Address
                    </Label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="text" id="default-0" placeholder="Business Address" value={business_address} onChange={(e) => setBusiness_Address(e.target.value)} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="default-0" className="form-label">
                      Business Email
                    </Label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="email" id="default-0" placeholder="Business Email" value={business_email} onChange={(e) => setBusiness_Email(e.target.value)} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="default-0" className="form-label">
                      Business Phone-number
                    </Label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="text" id="default-0" placeholder="Business Phone-number" value={business_phone_number} onChange={(e) => setBusiness_Phone_Number(e.target.value)} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="default-0" className="form-label">
                    Business Location
                    </Label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="text" id="default-0" placeholder="Business Location" value={business_location} onChange={(e) => setBusiness_Location(e.target.value)} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Button onClick={handleSubmit}>Create</Button>
              <ToastContainer />
            </Form>
          </Row>
        </PreviewCard>
      </Block>
    </React.Fragment>
  );
};

export default CreateLenderOrgForm;
