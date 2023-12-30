import {Button} from "reactstrap"
// import { useHistory } from 'react-router-dom';

// const history = useHistory();
// Custom component for the "Actions" column
const ActionsColumn = () => {
  // const history = useHistory();

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


export const usersColumns = [

  {
    name: "First Name",
    selector: (row) => row.first_name,
    sortable: true,
    hide: "md",
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
    sortable: true,
    hide: "md",
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    hide: "md",
  },
  {
    name: "Role",
    selector: (row) => row.roles,
    sortable: true,
    hide: "md",
  },
  {
    name: "Action",
    cell: (row) => <ActionsColumn row={row} />,
    sortable: true,
    hide: "md",
  },
]

