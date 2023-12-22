import React from "react";
import Files from "./Files";
import { folderList } from "../Data";
import PropTypes from "prop-types";

SpecificFolder.propTypes = {
  match: PropTypes.object,
  setData: PropTypes.func,
  searchText: PropTypes.string,
  setSearchText: PropTypes.object,
  toggleCreateModal: PropTypes.func,
  toggleUploadModal: PropTypes.func,
  toggleScreenLg: PropTypes.func,
  children: PropTypes.object,
};

const SpecificFolder = ({
  match,
  children,
  searchText,
  setSearchText,
  setData,
  toggleCreateModal,
  toggleUploadModal,
  toggleScreenLg,
}) => {
  const returnFolder = (id) => {
    return folderList.find((item) => item.id === id);
  };

  return (
    <React.Fragment>
      {children && (
        <Files
          data={children}
          setData={setData}
          searchText={searchText}
          setSearchText={setSearchText}
          folderName={returnFolder(Number(match.params.id)).meta.name}
          toggleCreateModal={toggleCreateModal}
          toggleUploadModal={toggleUploadModal}
          toggleScreenLg={toggleScreenLg}
        />
      )}
    </React.Fragment>
  );
};

export default SpecificFolder;
