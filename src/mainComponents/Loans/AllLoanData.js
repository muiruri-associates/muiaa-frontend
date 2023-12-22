/* eslint-disable no-unused-vars */
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Icon } from "../../components/Component";
import React from "react";

// const history = useHistory();
// Custom component for the "Actions" column
const ActionsColumn = () => {
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
                href={'/loan/${row}.id'}
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

// columns

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

export const RequestedLoansColumns = [
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
    name: "Lender",
    selector: (row) => row.lender,
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
    name: "Loan Amount",
    selector: (row) => row.loan_amount,
    sortable: true,
    hide: "md",
  },
  {
    name: "Due Date",
    selector: (row) => row.due_date,
    sortable: true,
    hide: "md",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "md",
  },
]

export const ApprovedLoansColumns = [
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
    name: "Lender",
    selector: (row) => row.lender,
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
    name: "Loan Amount",
    selector: (row) => row.loan_amount,
    sortable: true,
    hide: "md",
  },
  {
    name: "Due Date",
    selector: (row) => row.due_date,
    sortable: true,
    hide: "md",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "md",
  },
]

export const RejectedLoansColumns = [
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
    name: "Lender",
    selector: (row) => row.lender,
    sortable: true,
    hide: "md",
  },
  {
    name: "Disbursed On",
    selector: (row) => row.disbursed_on,
    sortable: true,
    hide: "md",
  },
  {
    name: "Loan Amount",
    selector: (row) => row.loan_amount,
    sortable: true,
    hide: "md",
  },
  {
    name: "Due Date",
    selector: (row) => row.due_date,
    sortable: true,
    hide: "md",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "md",
  },
]




// data

export const RequestedLoansData = [{"id":1,"loan_type":"Conny","lender":"Conny Pullen","disbursed_on":"8/1/2023","loan_amount":"$7.58","due_date":"12/22/2022","status":"19.225.85.133"},
{"id":2,"loan_type":"Emilee","lender":"Emilee Gingell","disbursed_on":"3/15/2023","loan_amount":"$1.56","due_date":"2/21/2023","status":"244.109.20.120"},
{"id":3,"loan_type":"Free","lender":"Free Stennard","disbursed_on":"10/27/2023","loan_amount":"$8.40","due_date":"8/12/2023","status":"13.20.100.164"},
{"id":4,"loan_type":"Wendye","lender":"Wendye Footitt","disbursed_on":"4/28/2023","loan_amount":"$2.32","due_date":"3/9/2023","status":"8.204.223.141"},
{"id":5,"loan_type":"Lion","lender":"Lion Soppett","disbursed_on":"7/3/2023","loan_amount":"$7.69","due_date":"8/31/2023","status":"122.24.52.136"},
{"id":6,"loan_type":"Frank","lender":"Frank Minchi","disbursed_on":"2/1/2023","loan_amount":"$7.22","due_date":"8/3/2023","status":"150.138.94.27"},
{"id":7,"loan_type":"Joye","lender":"Joye Farlham","disbursed_on":"1/26/2023","loan_amount":"$5.72","due_date":"5/29/2023","status":"96.165.219.12"},
{"id":8,"loan_type":"Denys","lender":"Denys Cervantes","disbursed_on":"10/4/2023","loan_amount":"$2.79","due_date":"7/11/2023","status":"211.54.177.128"},
{"id":9,"loan_type":"Kort","lender":"Kort Jiranek","disbursed_on":"2/28/2023","loan_amount":"$7.60","due_date":"1/22/2023","status":"169.169.120.197"},
{"id":10,"loan_type":"Richy","lender":"Richy Jerzykiewicz","disbursed_on":"2/18/2023","loan_amount":"$1.52","due_date":"8/16/2023","status":"192.153.88.22"},
{"id":11,"loan_type":"Bekki","lender":"Bekki Kinsell","disbursed_on":"10/12/2023","loan_amount":"$7.19","due_date":"7/13/2023","status":"102.66.44.185"},
{"id":12,"loan_type":"Kelbee","lender":"Kelbee MacNeillie","disbursed_on":"10/29/2023","loan_amount":"$1.80","due_date":"4/23/2023","status":"168.215.220.95"},
{"id":13,"loan_type":"Stephan","lender":"Stephan Clayworth","disbursed_on":"2/27/2023","loan_amount":"$3.73","due_date":"10/19/2023","status":"253.197.239.162"},
{"id":14,"loan_type":"Cinnamon","lender":"Cinnamon Veart","disbursed_on":"1/12/2023","loan_amount":"$4.56","due_date":"7/18/2023","status":"124.210.200.145"},
{"id":15,"loan_type":"Merrielle","lender":"Merrielle Ickovicz","disbursed_on":"11/10/2023","loan_amount":"$1.18","due_date":"5/2/2023","status":"20.95.187.105"},
{"id":16,"loan_type":"Samantha","lender":"Samantha Gogie","disbursed_on":"1/4/2023","loan_amount":"$3.20","due_date":"1/30/2023","status":"175.33.149.203"},
{"id":17,"loan_type":"Myer","lender":"Myer Reckus","disbursed_on":"6/30/2023","loan_amount":"$2.12","due_date":"11/2/2023","status":"149.71.51.208"},
{"id":18,"loan_type":"Zolly","lender":"Zolly Shevels","disbursed_on":"2/20/2023","loan_amount":"$1.77","due_date":"4/20/2023","status":"195.36.98.237"},
{"id":19,"loan_type":"Tilda","lender":"Tilda Mullins","disbursed_on":"3/16/2023","loan_amount":"$5.91","due_date":"11/23/2023","status":"199.15.228.4"},
{"id":20,"loan_type":"Howard","lender":"Howard Ber","disbursed_on":"8/31/2023","loan_amount":"$9.00","due_date":"10/9/2023","status":"113.0.219.88"}]

export const ApprovedLoansData = [{"id":1,"loan_type":"Conny","lender":"Conny Pullen","disbursed_on":"8/1/2023","loan_amount":"$7.58","due_date":"12/22/2022","status":"19.225.85.133"},
{"id":2,"loan_type":"Emilee","lender":"Emilee Gingell","disbursed_on":"3/15/2023","loan_amount":"$1.56","due_date":"2/21/2023","status":"244.109.20.120"},
{"id":3,"loan_type":"Free","lender":"Free Stennard","disbursed_on":"10/27/2023","loan_amount":"$8.40","due_date":"8/12/2023","status":"13.20.100.164"},
{"id":4,"loan_type":"Wendye","lender":"Wendye Footitt","disbursed_on":"4/28/2023","loan_amount":"$2.32","due_date":"3/9/2023","status":"8.204.223.141"},
{"id":5,"loan_type":"Lion","lender":"Lion Soppett","disbursed_on":"7/3/2023","loan_amount":"$7.69","due_date":"8/31/2023","status":"122.24.52.136"},
{"id":6,"loan_type":"Frank","lender":"Frank Minchi","disbursed_on":"2/1/2023","loan_amount":"$7.22","due_date":"8/3/2023","status":"150.138.94.27"},
{"id":7,"loan_type":"Joye","lender":"Joye Farlham","disbursed_on":"1/26/2023","loan_amount":"$5.72","due_date":"5/29/2023","status":"96.165.219.12"},
{"id":8,"loan_type":"Denys","lender":"Denys Cervantes","disbursed_on":"10/4/2023","loan_amount":"$2.79","due_date":"7/11/2023","status":"211.54.177.128"},
{"id":9,"loan_type":"Kort","lender":"Kort Jiranek","disbursed_on":"2/28/2023","loan_amount":"$7.60","due_date":"1/22/2023","status":"169.169.120.197"},
{"id":10,"loan_type":"Richy","lender":"Richy Jerzykiewicz","disbursed_on":"2/18/2023","loan_amount":"$1.52","due_date":"8/16/2023","status":"192.153.88.22"},
{"id":11,"loan_type":"Bekki","lender":"Bekki Kinsell","disbursed_on":"10/12/2023","loan_amount":"$7.19","due_date":"7/13/2023","status":"102.66.44.185"},
{"id":12,"loan_type":"Kelbee","lender":"Kelbee MacNeillie","disbursed_on":"10/29/2023","loan_amount":"$1.80","due_date":"4/23/2023","status":"168.215.220.95"},
{"id":13,"loan_type":"Stephan","lender":"Stephan Clayworth","disbursed_on":"2/27/2023","loan_amount":"$3.73","due_date":"10/19/2023","status":"253.197.239.162"},
{"id":14,"loan_type":"Cinnamon","lender":"Cinnamon Veart","disbursed_on":"1/12/2023","loan_amount":"$4.56","due_date":"7/18/2023","status":"124.210.200.145"},
{"id":15,"loan_type":"Merrielle","lender":"Merrielle Ickovicz","disbursed_on":"11/10/2023","loan_amount":"$1.18","due_date":"5/2/2023","status":"20.95.187.105"},
{"id":16,"loan_type":"Samantha","lender":"Samantha Gogie","disbursed_on":"1/4/2023","loan_amount":"$3.20","due_date":"1/30/2023","status":"175.33.149.203"},
{"id":17,"loan_type":"Myer","lender":"Myer Reckus","disbursed_on":"6/30/2023","loan_amount":"$2.12","due_date":"11/2/2023","status":"149.71.51.208"},
{"id":18,"loan_type":"Zolly","lender":"Zolly Shevels","disbursed_on":"2/20/2023","loan_amount":"$1.77","due_date":"4/20/2023","status":"195.36.98.237"},
{"id":19,"loan_type":"Tilda","lender":"Tilda Mullins","disbursed_on":"3/16/2023","loan_amount":"$5.91","due_date":"11/23/2023","status":"199.15.228.4"},
{"id":20,"loan_type":"Howard","lender":"Howard Ber","disbursed_on":"8/31/2023","loan_amount":"$9.00","due_date":"10/9/2023","status":"113.0.219.88"}]

export const RejectedLoansData = [{"id":1,"loan_type":"Conny","lender":"Conny Pullen","disbursed_on":"8/1/2023","loan_amount":"$7.58","due_date":"12/22/2022","status":"19.225.85.133"},
{"id":2,"loan_type":"Emilee","lender":"Emilee Gingell","disbursed_on":"3/15/2023","loan_amount":"$1.56","due_date":"2/21/2023","status":"244.109.20.120"},
{"id":3,"loan_type":"Free","lender":"Free Stennard","disbursed_on":"10/27/2023","loan_amount":"$8.40","due_date":"8/12/2023","status":"13.20.100.164"},
{"id":4,"loan_type":"Wendye","lender":"Wendye Footitt","disbursed_on":"4/28/2023","loan_amount":"$2.32","due_date":"3/9/2023","status":"8.204.223.141"},
{"id":5,"loan_type":"Lion","lender":"Lion Soppett","disbursed_on":"7/3/2023","loan_amount":"$7.69","due_date":"8/31/2023","status":"122.24.52.136"},
{"id":6,"loan_type":"Frank","lender":"Frank Minchi","disbursed_on":"2/1/2023","loan_amount":"$7.22","due_date":"8/3/2023","status":"150.138.94.27"},
{"id":7,"loan_type":"Joye","lender":"Joye Farlham","disbursed_on":"1/26/2023","loan_amount":"$5.72","due_date":"5/29/2023","status":"96.165.219.12"},
{"id":8,"loan_type":"Denys","lender":"Denys Cervantes","disbursed_on":"10/4/2023","loan_amount":"$2.79","due_date":"7/11/2023","status":"211.54.177.128"},
{"id":9,"loan_type":"Kort","lender":"Kort Jiranek","disbursed_on":"2/28/2023","loan_amount":"$7.60","due_date":"1/22/2023","status":"169.169.120.197"},
{"id":10,"loan_type":"Richy","lender":"Richy Jerzykiewicz","disbursed_on":"2/18/2023","loan_amount":"$1.52","due_date":"8/16/2023","status":"192.153.88.22"},
{"id":11,"loan_type":"Bekki","lender":"Bekki Kinsell","disbursed_on":"10/12/2023","loan_amount":"$7.19","due_date":"7/13/2023","status":"102.66.44.185"},
{"id":12,"loan_type":"Kelbee","lender":"Kelbee MacNeillie","disbursed_on":"10/29/2023","loan_amount":"$1.80","due_date":"4/23/2023","status":"168.215.220.95"},
{"id":13,"loan_type":"Stephan","lender":"Stephan Clayworth","disbursed_on":"2/27/2023","loan_amount":"$3.73","due_date":"10/19/2023","status":"253.197.239.162"},
{"id":14,"loan_type":"Cinnamon","lender":"Cinnamon Veart","disbursed_on":"1/12/2023","loan_amount":"$4.56","due_date":"7/18/2023","status":"124.210.200.145"},
{"id":15,"loan_type":"Merrielle","lender":"Merrielle Ickovicz","disbursed_on":"11/10/2023","loan_amount":"$1.18","due_date":"5/2/2023","status":"20.95.187.105"},
{"id":16,"loan_type":"Samantha","lender":"Samantha Gogie","disbursed_on":"1/4/2023","loan_amount":"$3.20","due_date":"1/30/2023","status":"175.33.149.203"},
{"id":17,"loan_type":"Myer","lender":"Myer Reckus","disbursed_on":"6/30/2023","loan_amount":"$2.12","due_date":"11/2/2023","status":"149.71.51.208"},
{"id":18,"loan_type":"Zolly","lender":"Zolly Shevels","disbursed_on":"2/20/2023","loan_amount":"$1.77","due_date":"4/20/2023","status":"195.36.98.237"},
{"id":19,"loan_type":"Tilda","lender":"Tilda Mullins","disbursed_on":"3/16/2023","loan_amount":"$5.91","due_date":"11/23/2023","status":"199.15.228.4"},
{"id":20,"loan_type":"Howard","lender":"Howard Ber","disbursed_on":"8/31/2023","loan_amount":"$9.00","due_date":"10/9/2023","status":"113.0.219.88"}]

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
