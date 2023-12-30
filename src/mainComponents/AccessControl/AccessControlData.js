import {Button} from "reactstrap"
import { useHistory } from 'react-router-dom';

// const history = useHistory();
// Custom component for the "Actions" column


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

