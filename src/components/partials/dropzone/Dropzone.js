import PropTypes from "prop-types"
import React from "react";

const DropzoneContainer = (props) => {
  const {
    input,
    previews,
    submitButton,
    files,
    extra: { maxFiles },
  } = props;
  return (
    <div
      //className="dropzone upload-zone small bg-lighter my-2 dz-clickable"
      style={{ overflow: "hidden" }}
    >
      {previews}

      {files.length < maxFiles && input}

      {files.length > 0 && submitButton}
    </div>
  );
};

DropzoneContainer.propTypes = {
  files: PropTypes.shape({
    length: PropTypes.number
  }),
  input: PropTypes.any,
  previews: PropTypes.any,
  submitButton: PropTypes.any,
  extra: PropTypes.object
}

export default DropzoneContainer;
