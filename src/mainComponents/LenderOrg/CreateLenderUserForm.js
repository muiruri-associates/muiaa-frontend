import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Row, Col, Button, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, OverlineTitle } from "../../components/Component";
import { createLenderOrg } from "../../redux/actions/lenderOrgActions";

const CreateLenderUserForm = () => {
  const dispatch = useDispatch();

  // State to manage form inputs
  const [selectedLenderOrg, setSelectedLenderOrg] = useState("");
  const [business_email, setBusiness_Email] = useState("");

  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle lender organization selection
  const handleLenderOrgChange = (e) => {
    setSelectedLenderOrg(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedLenderOrg || !business_email ) {
      toast.error("Please fill out all fields.");
      return;
    }

    const lenderOrgData = {
      selectedLenderOrg,
      business_email,
    };

    try {
      await dispatch(createLenderOrg(lenderOrgData));
      console.log("data>>", lenderOrgData);
      setSelectedLenderOrg("");
      setBusiness_Email("");
      setIsSubmitted(true);
      toast.success("Lender Org User created successfully!");
    } catch (error) {
      // Handle submission error here
      toast.error("Error creating lender Org User.");
    }
  };
  return (
    <React.Fragment>
      <Block size="lg">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Create New Lender User</BlockTitle>
          </BlockHeadContent>
        </BlockHead>
        <PreviewCard>
          <OverlineTitle tag="span" className="preview-title-lg">
            {" "}
            Default Preview{" "}
          </OverlineTitle>
          <Row className="gy-4">
            <Col sm="6">
              <Form>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                    Lender Organization
                  </Label>
                  <div className="form-control-wrap">
                    <Input
                      className="form-control"
                      id="exampleSelect"
                      name="select"
                      type="select"
                      value={selectedLenderOrg}
                      onChange={handleLenderOrgChange}
                    >
                      <option value="">Select an organization</option>
                      <option value="1">Organization 1</option>
                      <option value="2">Organization 2</option>
                      <option value="3">Organization 3</option>
                      <option value="4">Organization 4</option>
                      <option value="5">Organization 5</option>
                    </Input>
                  </div>
                </FormGroup>
              </Form>
            </Col>

            <Col sm="6">
              <Form>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                    Business Email
                  </Label>
                  <div className="form-control-wrap">
                    <input
                      className="form-control"
                      type="email"
                      id="default-0"
                      placeholder="Business Email"
                      value={business_email}
                      onChange={(e) => setBusiness_Email(e.target.value)}
                    />
                  </div>
                </FormGroup>
              </Form>
            </Col>

            <Col sm="12">
              <Button onClick={handleSubmit}>Create</Button>
              <ToastContainer />
            </Col>
          </Row>
        </PreviewCard>
      </Block>
    </React.Fragment>
  );
};

export default CreateLenderUserForm;
