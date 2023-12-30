import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Form, FormGroup, Label, Row, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, OverlineTitle } from "../../components/Component";
import { createLenderOrg } from "../../redux/actions/lenderOrgActions";

const CreatePermissionForm = () => {
  const dispatch = useDispatch();

  // State to manage form inputs
  const [name, setName] = useState("");

  // State to manage form submission status

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Split the input value based on comma (you can use any delimiter of your choice)
    const newNameArray = name.split(",").map((name) => name.trim()); // Trim whitespace around each name
  
    if (newNameArray.length === 0 || newNameArray.includes("")) {
      toast.error("Please enter at least one valid name separated by commas.");
      return;
    }
  
    const permissionData = {
      name: newNameArray,
    };
  
    try {
      await dispatch(createLenderOrg(permissionData));
      console.log("data>>", permissionData);
      setName("");
      toast.success("Permission created successfully!");
    } catch (error) {
      // Handle submission error here
      toast.error("Error creating Permission.");
    }
  };
  
  return (
    <React.Fragment>
      <Block size="lg">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Create New Permission</BlockTitle>
          </BlockHeadContent>
        </BlockHead>
        <PreviewCard>
          <OverlineTitle tag="span" className="preview-title-lg">
            {" "}
            Default Preview{" "}
          </OverlineTitle>
          <Row className="gy-4">
            <Form>
              <FormGroup row>
                <Label for="exampleText">
                  Text Area
                </Label>
                <Input id="exampleText" name="text" placeholder="Type texts separated by commas (,)" type="textarea" value={name} onChange={handleInputChange} />
              </FormGroup>
              <br />
              <Button onClick={handleSubmit}>Create</Button>
            </Form>
          </Row>
        </PreviewCard>
      </Block>
      <ToastContainer /> {/* Move ToastContainer outside the Row element */}
    </React.Fragment>
  );
};

export default CreatePermissionForm;
