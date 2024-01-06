import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { uploadDocument, getAllUserUploads } from "../../redux/actions/uploadActions";

const UploadDocument = () => {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.upload.documents) || []; // Initialize as an empty array if undefined
  console.log("Documents", documents);

  const [files, setFiles] = useState([]);
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

  const handleDropChange = (acceptedFiles, type) => {
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
        {documents.map((doc, index) => (
          <Col sm="6" key={index}>
            <label className="form-label">{doc.type}</label>
            <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, doc.type)}>
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
        ))}
      </Row>
    </div>
  );
};

export default UploadDocument;
