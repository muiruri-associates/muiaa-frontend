import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Icon } from "../../components/Component";

// const history = useHistory();
// Custom component for the "Actions" column
const ActionsColumn = ({ row }) => {
  const history = useHistory();

  return (
    <UncontrolledDropdown>
        <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-icon btn-trigger">
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-plain">
            <li>
              <DropdownItem
                tag="a"
                href={`${process.env.PUBLIC_URL}/loan/${row}.id`}
              >
                View
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Approve
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Reject
              </DropdownItem>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
  );
};


export const dataTableColumns = [
  {
    name: "Loan ID",
    selector: (row) => row.id,
    sortable: true,
    hide: "sm",
  },
  {
    name: "Loan Type",
    selector: (row) => row.loan_type,
    sortable: true,
    hide: "md",
  },
  {
    name: "Amount",
    selector: (row) => row.loan_amount,
    sortable: true,
    hide: "md",
  },
  {
    name: "Disbured On",
    selector: (row) => row.disbursed_on,
    sortable: true,
    hide: "md",
  },
  {
    name: "Rating",
    selector: (row) => row.rating,
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
];

export const DataTableData = [
  {
    id: 1,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 4.78",
    disbursed_on: "8/19/2022",
    rating: 5,
    status: "pending",
  },
  {
    id: 2,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 3.71",
    disbursed_on: "7/28/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 3,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 3.81",
    disbursed_on: "1/26/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 4,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 4.71",
    disbursed_on: "12/9/2022",
    rating: 5,
    status: "pending",
  },
  {
    id: 5,
    loan_type: "Buisness Loan",
    loan_amount: "Ksh. 5.23",
    disbursed_on: "1/27/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 6,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 6.90",
    disbursed_on: "8/26/2022",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 7,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 3.92",
    disbursed_on: "12/9/2022",
    rating: 5,
    status: "pending",
  },
  {
    id: 8,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 1.52",
    disbursed_on: "7/11/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 9,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 9.92",
    disbursed_on: "10/5/2022",
    rating: 5,
    status: "pending",
  },
  {
    id: 10,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 2.78",
    disbursed_on: "7/8/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 11,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 4.95",
    disbursed_on: "2/7/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 12,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 5.68",
    disbursed_on: "2/27/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 13,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 8.73",
    disbursed_on: "2/13/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 14,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 3.54",
    disbursed_on: "7/10/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 15,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 4.97",
    disbursed_on: "7/7/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 16,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 5.95",
    disbursed_on: "4/24/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 17,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 0.68",
    disbursed_on: "4/28/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 18,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 3.28",
    disbursed_on: "8/15/2022",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 19,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 3.22",
    disbursed_on: "5/20/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 20,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 3.83",
    disbursed_on: "6/20/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 21,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 5.37",
    disbursed_on: "10/3/2022",
    rating: 5,
    status: "pending",
  },
  {
    id: 22,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 3.66",
    disbursed_on: "9/8/2022",
    rating: 5,
    status: "pending",
  },
  {
    id: 23,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 4.09",
    disbursed_on: "2/25/2023",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 24,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 0.05",
    disbursed_on: "7/12/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 25,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 2.68",
    disbursed_on: "2/12/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 26,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 6.10",
    disbursed_on: "12/23/2022",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 27,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 8.81",
    disbursed_on: "3/23/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 28,
    loan_type: "Personal Loan",
    loan_amount: "Ksh. 7.44",
    disbursed_on: "9/5/2022",
    rating: 5,
    status: "disbursed",
  },
  {
    id: 29,
    loan_type: "Business Loan",
    loan_amount: "Ksh. 100000.52",
    disbursed_on: "5/25/2023",
    rating: 5,
    status: "pending",
  },
  {
    id: 30,
    loan_type: "Mortgage",
    loan_amount: "Ksh. 600000.71",
    disbursed_on: "1/15/2023",
    rating: 5,
    status: "disbursed",
  },
];
