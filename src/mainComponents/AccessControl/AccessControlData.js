import {Button} from "reactstrap"
import { useHistory } from 'react-router-dom';

// const history = useHistory();
// Custom component for the "Actions" column
const ActionsColumn = ({ row }) => {
  const history = useHistory();

  // Function to handle the view button click
  const handleView = () => {
    // Replace '/destination' with the path of the desired destination page
    // history.push(`${process.env.PUBLIC_URL}/lender-organization/${row._id}`);
    alert('Hello')
  };

  return (
    <Button className="btn-dim" outline color="info" onClick={handleView}>
      view
    </Button>
  );
};

export const dataTableColumns = [
  {
    name: "Permission Name",
    selector: (row) => row.name,
    sortable: true,
    hide: "md",
  },
];

export const rolesColumns = [
  {
    name: "Role Name",
    selector: (row) => row.name,
    sortable: true,
    hide: "md",
  },
]

