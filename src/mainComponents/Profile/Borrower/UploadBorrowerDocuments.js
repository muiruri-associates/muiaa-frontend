import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from 'react-redux';
import { Button, Col, Row } from "reactstrap";
import { uploadDocument } from "../../../redux/actions/uploadActions";

const UploadBorrowerDocument = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const [type, setType] = useState('ID');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage (assuming it's stored as JSON)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isUser = user && user.role === "User";

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles) => {
    setFile(
      acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }))
    );

    /// Dispatch the uploadDocument action to handle file upload
    acceptedFiles.forEach((file) => {
      dispatch(uploadDocument({ type: type, documentData: file }));
    });
  };
  // const handleDropChange = (acceptedFiles) => {
  //   setFile(
  //     acceptedFiles.map((file) =>
  //       Object.assign(file, {
  //         preview: URL.createObjectURL(file),
  //       })
  //     )
  //   );
  // };
  // Function to handle changes in the document type input
  const handleTypeChange = (e) => {
    setType(e.target.value); // Update the type state when the input changes
  };
  return (
    <div style={{ overflowY: 'auto', maxHeight: '100vh', paddingRight: '17px' }}>
      {isUser && (<>
        <Row>
          <Col sm="6">
            <label className="form-label">Personal ID</label>
            <input type="text" value={type} hidden defaultValue={type}/>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFile)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {file.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {file.map((file) => (
                      <div key={file.name} className="dz-preview dz-processing dz-image-preview dz-error dz-complete">
                        <div className="dz-image">
                          <img src={file.preview} alt="preview" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </Dropzone>
          </Col>
          <Col sm="6">
            <label className="form-label">Personal KRA PIN</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFile)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {file.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {file.map((file) => (
                      <div key={file.name} className="dz-preview dz-processing dz-image-preview dz-error dz-complete">
                        <div className="dz-image">
                          <img src={file.preview} alt="preview" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </Dropzone>
          </Col>
        </Row>
        <br />
      </>)}
      {isUser && (
      <>
        <Row>
          <Col sm="6">
            <label className="form-label">Personal MPESA Statement</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFile)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {file.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {file.map((file) => (
                      <div key={file.name} className="dz-preview dz-processing dz-image-preview dz-error dz-complete">
                        <div className="dz-image">
                          <img src={file.preview} alt="preview" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </Dropzone>
          </Col>
          <Col sm="6">
            <label className="form-label">Personal Bank Statement</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFile)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {file.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {file.map((file) => (
                      <div key={file.name} className="dz-preview dz-processing dz-image-preview dz-error dz-complete">
                        <div className="dz-image">
                          <img src={file.preview} alt="preview" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </Dropzone>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <label className="form-label">Mortgage Downpayment Slip</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFile)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {file.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {file.map((file) => (
                      <div key={file.name} className="dz-preview dz-processing dz-image-preview dz-error dz-complete">
                        <div className="dz-image">
                          <img src={file.preview} alt="preview" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </Dropzone>
          </Col>
        </Row>
        <br />
      </>)}
    </div>
  );
};

export default UploadBorrowerDocument;
