import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { Button, Col, Row } from "reactstrap";

const UploadDocument = () => {
  const [files, setFiles] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage (assuming it's stored as JSON)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isLender = user && user.role === "Lender";
  const isUser = user && user.role === "User";

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles, set) => {
    set(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  return (
    <div style={{ overflowY: 'auto', maxHeight: '100vh', paddingRight: '17px' }}>
      {isUser && (<>
        <Row>
          <Col sm="6">
            <label className="form-label">Personal ID</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
      {isUser && (<>
        <Row>
          <Col sm="6">
            <label className="form-label">Personal MPESA Statement</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
      {isLender && (<>
        <Row>
          <Col sm="6">
            <label className="form-label">Business License</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
            <label className="form-label">Business KRA PIN</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
        <Row>
          <Col sm="6">
            <label className="form-label">Business Tax Compliance Certificate(2 years)</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
            <label className="form-label">Business MPESA Statement</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
        <Row>
          <Col sm="6">
            <label className="form-label">Business Tax Compliance Certificate(2 years)</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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
            <label className="form-label">Business MPESA Statement</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                    <input {...getInputProps()} />
                    {files.length === 0 && (
                      <div className="dz-message">
                        <span className="dz-message-text">Drag and drop file</span>
                        <span className="dz-message-or">or</span>
                        <Button color="primary">SELECT</Button>
                      </div>
                    )}
                    {files.map((file) => (
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

export default UploadDocument;
