import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { Form, FormGroup, Label, Row, Col, Button, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, OverlineTitle } from "../../components/Component";
import { createLenderUser } from "../../redux/actions/lenderUserActions";

// Import the fetchData action
import { fetchData } from "../../redux/actions/lenderOrgActions";

const CreateLenderUserForm = () => {
  const dispatch = useDispatch();
  const lenderOrg = useSelector((state) => state.lenderOrg);

  // State to manage form inputs
  const [lenderOrgId, setLenderOrgId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // State to manage form submission status
  const [setIsSubmitted] = useState(false);

  useEffect(() => {
    // Fetch organizations when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  // Function to handle lender organization selection
  const handleLenderOrgChange = (e) => {
    setLenderOrgId(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lenderOrgId || !email || !name || !phone) {
      toast.error("Please fill out all fields.");
      return;
    }

    const lenderUserData = {
      lenderOrgId,
      email,
      name,
      phone,
    };

    try {
      const invite = await dispatch(createLenderUser(lenderUserData));
      console.log("Invite object:", invite); // Access the invite object here

      // Clear form fields and set submission status
      setLenderOrgId("");
      setEmail("");
      setName("");
      setPhone("");
      setIsSubmitted(true);

      // Handle the invite object or display a success message
      if (invite && Object.keys(invite).length > 0) {
        // Perform actions based on the invite object
        // For example, display invite details or navigate to another page
        toast.success("Lender Org User created successfully!");
        // Additional logic based on 'invite' data
      } else {
        // Handle scenario if invite object is empty or not as expected
        toast.error("Error creating lender Org User. Invite data empty.");
      }
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
            <Col sm="12">
              <Form onSubmit={handleSubmit}>
                <Row className="gy-4">
                  <Col sm="12" md="6">
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
                          value={lenderOrgId}
                          onChange={handleLenderOrgChange}
                        >
                          <option value="">Select an organization</option>
                          {lenderOrg.lenderOrgs
                            ? lenderOrg.lenderOrgs.map((org) => (
                                <option key={org._id} value={org._id}>
                                  {org.business_name}
                                </option>
                              ))
                            : null}
                        </Input>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12" md="6">
                    <FormGroup>
                      <Label htmlFor="default-3" className="form-label">
                        Business Email
                      </Label>
                      <div className="form-control-wrap">
                        <input
                          className="form-control"
                          type="email"
                          id="default-3"
                          placeholder="Business Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12" md="6">
                    <FormGroup>
                      <Label htmlFor="default-1" className="form-label">
                        Name
                      </Label>
                      <div className="form-control-wrap">
                        <input
                          className="form-control"
                          type="text"
                          id="default-1"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12" md="6">
                    <FormGroup>
                      <Label htmlFor="default-2" className="form-label">
                        Phone Number
                      </Label>
                      <div className="form-control-wrap">
                        <input
                          className="form-control"
                          type="text"
                          id="default-2"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <Button type="submit">Create</Button>
                    <ToastContainer />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </PreviewCard>
      </Block>
    </React.Fragment>
  );
};

export default CreateLenderUserForm;
