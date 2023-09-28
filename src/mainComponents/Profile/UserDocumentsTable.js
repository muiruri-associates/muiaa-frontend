import React from "react";
import { Button } from "reactstrap";

const UserDocumentsTable = () => {
  return (
    <div>
      <table className="table table-orders">
        <thead className="tb-odr-head">
          <tr className="tb-odr-item">
            <th className="tb-odr-info">
              <span className="tb-odr-id">Document Name</span>
            </th>
            <th className="tb-odr-action">&nbsp;</th>
          </tr>
        </thead>
        <tbody className="tb-odr-body">
          <tr className="tb-odr-item">
            <td className="tb-odr-info">
              <span className="tb-odr-id">
                Alex.pdf
              </span>
            </td>
            <td className="tb-odr-action">
              <div className="tb-odr-btns d-none d-md-inline">
                <Button color="primary" className="btn-sm">
                  View
                </Button>
              </div>
            </td>
          </tr>
          <tr className="tb-odr-item">
            <td className="tb-odr-info">
              <span className="tb-odr-id">
                Alex.pdf
              </span>
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
    </div>
  );
};

export default UserDocumentsTable;