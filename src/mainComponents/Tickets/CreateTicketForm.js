import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Row, Col, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, OverlineTitle } from "../../components/Component";
import { createTicket } from '../../redux/actions/ticketActions';

const CreateTicketForm = () => {
  const dispatch = useDispatch();

  //State to manage form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [username, setUsername] = useState("TEST USER");
  const [email, setEmail] = useState("test@gmail.com");

  // State to manage form submission status
     const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (
        !title ||
        !description ||
        !type
      ) {
        toast.error("Please fill out all fields.");
        return;
      }
      const ticketData = {
        title,
        description,
        type
      };
      try {
        await dispatch(createTicket(ticketData));
        console.log('data>>', ticketData)
        setTitle("");
        setDescription("");
        setType("");
        // setusername("");
        // setEmail("");
        setIsSubmitted(true);
        toast.success("Ticket created successfully!");
      } catch (error) {
        // Handle submission error here
        toast.error("Error creating Ticket.");
      }
  };
  return (
    <React.Fragment>
      <Block size="lg">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* First BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BlockTitle tag="h2" className="fw-normal">
                Create Ticket
              </BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          {/* Second BlockHead */}
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <Button>
                <Link to={`/my-tickets`} >
                    My Tickets
                </Link>
              </Button>
            </BlockHeadContent>
          </BlockHead>
        </div>
        <PreviewCard>
          <OverlineTitle tag="span" className="preview-title-lg">
            {" "}
            Default Preview{" "}
          </OverlineTitle>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                    Username
                  </Label>
                  <div className="form-control-wrap">
                    <input
                      className="form-control"
                      type="text"
                      id="default-0"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                    Email Address
                  </Label>
                  <div className="form-control-wrap">
                    <input
                      className="form-control"
                      type="email"
                      id="default-0"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <br />
            <br />
            <FormGroup>
              <Label htmlFor="default-0" className="form-label">
                Title
              </Label>
              <div className="form-control-wrap">
                <input
                  className="form-control"
                  type="text"
                  id="default-0"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="default-0" className="form-label">
                Type
              </Label>
              <div className="form-control-wrap">
                <select
                  className="form-control"
                  type="text"
                  id="default-0"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="Business">Business</option>
                    <option value="Investor">Investor</option>
                </select>
              </div>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="default-0" className="form-label">
                Description
              </Label>
              <div className="form-control-wrap">
                <textarea
                  className="form-control"
                  type="text"
                  id="default-0"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </FormGroup>

            <br />
            <Button type="submit">Create Ticket</Button>
            <ToastContainer />
          </Form>
          {isSubmitted && (
              <div className="text-center pt-4">
                <p>Lender Organization created successfully!</p>
                {/* Optionally, add a redirect logic here */}
              </div>
            )}
        </PreviewCard>
      </Block>
    </React.Fragment>
  );
};

export default CreateTicketForm;
