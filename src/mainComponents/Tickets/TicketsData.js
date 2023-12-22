import PropTypes from "prop-types"
import {Button} from "reactstrap"
import { useHistory } from 'react-router-dom';
import React from "react";

const ActionsColumn = ({ row }) => {
    const history = useHistory();
  
    // Function to handle the view button click
    const handleView = () => {
      // Replace '/destination' with the path of the desired destination page
      history.push(`/ticket/${row._id}`);
    };
  
    return (
      <Button className="btn-dim" outline color="info" onClick={handleView}>
        view
      </Button>
    );
  };

ActionsColumn.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.any
  })
}


export const TicketColums = [
    {
      name: "Ticket No",
      selector: (row) => row._id,
      sortable: true,
      hide: "md",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      hide: "md",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      hide: "md",
    },
    {
      name: "Last Updated",
      selector: (row) => row.updatedAt,
      sortable: true,
      hide: "md",
    },
    {
      name: "Actions",
      cell: (row) => <ActionsColumn row={row} />, // Use the custom component for rendering the "Actions" cell
      sortable: false,
      hide: "md",
    },
  ];

  export const TicketData = [{"ticket_no":1,"title":"Arlin","status":"open","last_updated":"2:02 AM"},
  {"ticket_no":2,"title":"Skipper","status":"closed","last_updated":"3:37 PM"},
  {"ticket_no":3,"title":"Alla","status":"closed","last_updated":"1:44 AM"},
  {"ticket_no":4,"title":"Lucille","status":"open","last_updated":"7:56 PM"},
  {"ticket_no":5,"title":"Gardner","status":"open","last_updated":"2:08 PM"},
  {"ticket_no":6,"title":"Broderick","status":"closed","last_updated":"7:51 PM"},
  {"ticket_no":7,"title":"Winn","status":"closed","last_updated":"11:31 AM"},
  {"ticket_no":8,"title":"Delbert","status":"closed","last_updated":"8:11 PM"},
  {"ticket_no":9,"title":"Claiborn","status":"open","last_updated":"3:03 PM"},
  {"ticket_no":10,"title":"Davie","status":"open","last_updated":"11:34 AM"},
  {"ticket_no":11,"title":"Bunni","status":"closed","last_updated":"5:14 AM"},
  {"ticket_no":12,"title":"Corrine","status":"closed","last_updated":"12:06 AM"},
  {"ticket_no":13,"title":"Jedd","status":"open","last_updated":"3:19 PM"},
  {"ticket_no":14,"title":"Marley","status":"open","last_updated":"8:21 PM"},
  {"ticket_no":15,"title":"Townie","status":"open","last_updated":"9:39 PM"},
  {"ticket_no":16,"title":"Paolina","status":"closed","last_updated":"3:14 PM"},
  {"ticket_no":17,"title":"Brett","status":"closed","last_updated":"12:05 PM"},
  {"ticket_no":18,"title":"Harriot","status":"closed","last_updated":"3:58 AM"},
  {"ticket_no":19,"title":"Mehetabel","status":"closed","last_updated":"1:24 AM"},
  {"ticket_no":20,"title":"Halli","status":"closed","last_updated":"12:44 PM"}]