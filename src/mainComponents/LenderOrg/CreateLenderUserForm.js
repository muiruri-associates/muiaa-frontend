import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { Form, FormGroup, Label, Row, Col, Button, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, OverlineTitle } from "../../components/Component";
import { createLenderOrg } from "../../redux/actions/lenderOrgActions";

// Import the fetchData action
import { fetchData } from "../../redux/actions/lenderOrgActions";

const CreateLenderUserForm = () => {
  const dispatch = useDispatch();
  const lenderOrg = useSelector((state) => state.lenderOrg);

  // State to manage form inputs
  const [selectedLenderOrg, setSelectedLenderOrg] = useState("");
  const [business_email, setBusiness_Email] = useState("");

  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Fetch organizations when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  // Function to handle lender organization selection
  const handleLenderOrgChange = (e) => {
    setSelectedLenderOrg(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedLenderOrg || !business_email) {
      toast.error("Please fill out all fields.");
      return;
    }

    const lenderOrgData = {
      selectedLenderOrg,
      business_email,
    };

    try {
      await dispatch(createLenderOrg(lenderOrgData));
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
                      {lenderOrg.lenderOrgs
                        ? lenderOrg.lenderOrgs.map((org) => (
                            <option key={org.id} value={org.id}>
                              {org.business_name}
                            </option>
                          ))
                        : null}
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
