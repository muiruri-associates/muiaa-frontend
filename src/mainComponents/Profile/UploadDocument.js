import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { uploadDocument, getAllUserUploads } from "../../redux/actions/uploadActions";

// TODO: Fix issue with upload document component not displaying 

const UploadDocument = () => {
  const dispatch = useDispatch();
  const upload = useSelector((state) => state.upload.documents);
  console.log("Upload data", upload);

  const [files, setFiles] = useState([]);
  const [type, setType] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    dispatch(getAllUserUploads());
  }, [dispatch]);

  const handleDropChange = (acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));
    setFiles([...files, ...updatedFiles]);

    acceptedFiles.forEach((file) => {
      dispatch(uploadDocument({ type: type, documentData: file }));
    });
  };

  return (
    <div style={{ overflowY: "auto", maxHeight: "100vh", paddingRight: "17px" }}>
      <Row>
        <Col sm="6">
                  <label className="form-label">{type}</label>
                  <input type="text" value={type} onChange={(e) => setType(e.target.value)} hidden />
                  <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
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
                          {files.map((file, idx) => (
                            <div key={idx} className="dz-preview dz-processing dz-image-preview dz-error dz-complete">
                              <div className="dz-image">
                                <img src={file.preview} alt={`preview-${idx}`} />
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
