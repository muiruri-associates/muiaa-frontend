import {Button} from "reactstrap"
import { useHistory } from 'react-router-dom';

const ActionsColumn = ({ row }) => {
    const history = useHistory();
  
    // Function to handle the view button click
    const handleView = () => {
      // Replace '/destination' with the path of the desired destination page
      history.push(`${process.env.PUBLIC_URL}/lender-organization/${row._id}`);
    };
  
    return (
      <Button className="btn-dim" outline color="info" onClick={handleView}>
        view
      </Button>
    );
  };

export const dataTableColumns = [
    {
        name: "Username",
        selector: (row) => row.username,
        sortable: true,
        hide: "md",
      },
      {
        name: "Plan",
        selector: (row) => row.plan,
        sortable: true,
        hide: "md",
      },
      {
        name: "Payment Method",
        selector: (row) => row.payment_method,
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
        name: "Actions",
        cell: (row) => <ActionsColumn row={row} />, // Use the custom component for rendering the "Actions" cell
        sortable: false,
        hide: "md",
      },
]
export const DataTableData = [
    {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
      {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
      {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
      {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
      {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
      {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
      {
        username: "Francine Kirby",
        plan: "Basic",
        payment_method: "M-pesa",
        status: "Active"
      },
]