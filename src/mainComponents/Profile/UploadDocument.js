import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Button, Col, Row } from "reactstrap";

const UploadDocument = () => {
  const [files, setFiles] = useState([]);

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
    <div>
      <Row>
        <Col sm="6">
          <label className="form-label">Upload ID</label>
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
          <label className="form-label">Upload KRA PIN</label>
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
          <label className="form-label">Upload Business Permitt</label>
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
    </div>
  );
};

export default UploadDocument;
