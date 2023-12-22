import React, { useState } from "react";
// import { Document, Page, pdfjs} from 'react-pdf';
import { Button, Modal, ModalBody } from "reactstrap";

const BorrowersDocumentsTable = () => {
  const [modal, setModal] = useState(false);
  // const [numPages, setNumPages] = useState();
  // const [pageNumber, setPageNumber] = useState(1);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Retrieve user data from local storage (assuming it's stored as JSON)
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  // const isLender = user && user.role === "Lender";
  // const isUser = user && user.role === "User";

  return (
    <div>
      <table className="table table-orders">
        <thead className="tb-odr-head">
          <tr className="tb-odr-item">
            <th className="tb-odr-info">
              <span className="tb-odr-id">Document Type</span>
            </th>
            <th className="tb-odr-action">
              <span className="tb-odr-id">Document</span>
            </th>
            <th className="tb-odr-action">
              <span className="tb-odr-id">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="tb-odr-body">
          <tr className="tb-odr-item">
            <td className="tb-odr-info">
              <span className="tb-odr-id">ID Front</span>
            </td>
            <td className="tb-odr-info">
              <span className="tb-odr-id">ID_FRONT.pdf</span>
            </td>
            <td className="tb-odr-action">
              <Button color="primary" className="btn-sm" onClick={() => setModal(true)}>
                View
              </Button>
            </td>
          </tr>
          <tr className="tb-odr-item">
            <td className="tb-odr-info">
              <span className="tb-odr-id">ID Back</span>
            </td>
            <td className="tb-odr-info">
              <span className="tb-odr-id">ID_BACK.pdf</span>
            </td>
            <td className="tb-odr-action">
              <Button color="primary" className="btn-sm">
                View
              </Button>
            </td>
          </tr>
          <tr className="tb-odr-item">
            <td className="tb-odr-info">
              <span className="tb-odr-id">MPESA Statement</span>
            </td>
            <td className="tb-odr-info">
              <span className="tb-odr-id">MPESA.pdf</span>
            </td>
            <td className="tb-odr-action">
              <Button color="primary" className="btn-sm">
                View
              </Button>
            </td>
          </tr>
          <tr className="tb-odr-item">
            <td className="tb-odr-info">
              <span className="tb-odr-id">KRA PIN</span>
            </td>
            <td className="tb-odr-info">
              <span className="tb-odr-id">KRA_PIN.pdf</span>
            </td>
            <td className="tb-odr-action">
              <div className="tb-odr-btns d-none d-md-inline">
                <Button color="primary" className="btn-sm">
                  View
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal
        isOpen={modal}
        className="modal-dialog-centered"
        size="lg"
        toggle={() => setModal(false)}
      >
        <ModalBody>
          <div>
            {/* <Document file="../../assets/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p> */}
            <p>View your document</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BorrowersDocumentsTable;
