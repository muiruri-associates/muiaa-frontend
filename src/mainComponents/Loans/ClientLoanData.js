import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Icon } from "../../components/Component";

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


export const personalLoanColumns = [
  {
    name: "Loan ID",
    selector: (row) => row.id,
    sortable: true,
    hide: "sm",
  },
  {
    name: "User",
    selector: (row) => row.user,
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
    name: "Loan  Required Duration",
    selector: (row) => row.loan_required_duration,
    sortable: true,
    hide: "md",
  },
  {
    name: "Total Expenses",
    selector: (row) => row.total_expenses,
    sortable: true,
    hide: "md",
  },
  {
    name: "Amount Approved",
    selector: (row) => row.amount_approved,
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
    name: "Installment Period",
    selector: (row) => row.installment_period,
    sortable: true,
    hide: "md",
  },
  {
    name: "Payment Duration",
    selector: (row) => row.payment_duration,
    sortable: true,
    hide: "md",
  },
  {
    name: "Interest Rate",
    selector: (row) => row.interest_rate,
    sortable: true,
    hide: "md",
  },
  {
    name: "Future Income Change",
    selector: (row) => row.future_income_change,
    sortable: true,
    hide: "md",
  },
  {
    name: "Total Income",
    selector: (row) => row.total_income,
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

export const personalLoanData = [{"id":1,"user":"Dorena Godlonton","loan_type":"visa-electron","amount":"$4.65","loan_required_duration":"6:52 PM","total_expenses":"$7.97","amount_approved":"$3.81","disbursed_on":"12/20/2022","installment_period":"7/10/2023","payment_duration":"4/3/2023","interest_rate":"$8.97","future_income_change":"$7.35","total_income":"$7.32","status":-1.26},
{"id":2,"user":"Thaine Wissby","loan_type":"jcb","amount":"$6.60","loan_required_duration":"7:44 AM","total_expenses":"$9.90","amount_approved":"$6.02","disbursed_on":"12/21/2022","installment_period":"11/5/2023","payment_duration":"11/22/2023","interest_rate":"$1.83","future_income_change":"$4.53","total_income":"$4.30","status":0.36},
{"id":3,"user":"Marisa Sadler","loan_type":"americanexpress","amount":"$9.58","loan_required_duration":"6:51 PM","total_expenses":"$0.73","amount_approved":"$3.43","disbursed_on":"10/18/2023","installment_period":"6/19/2023","payment_duration":"12/4/2022","interest_rate":"$2.40","future_income_change":"$6.94","total_income":"$1.03","status":-0.73},
{"id":4,"user":"Charisse Young","loan_type":"jcb","amount":"$7.36","loan_required_duration":"6:54 AM","total_expenses":"$8.66","amount_approved":"$5.85","disbursed_on":"12/3/2022","installment_period":"4/17/2023","payment_duration":"11/30/2022","interest_rate":"$4.69","future_income_change":"$1.28","total_income":"$9.81","status":-0.2},
{"id":5,"user":"Marthe Wycliffe","loan_type":"jcb","amount":"$0.05","loan_required_duration":"7:27 PM","total_expenses":"$6.70","amount_approved":"$9.06","disbursed_on":"6/15/2023","installment_period":"5/8/2023","payment_duration":"3/12/2023","interest_rate":"$2.95","future_income_change":"$6.07","total_income":"$3.27","status":0.15},
{"id":6,"user":"Ynes Leftly","loan_type":"jcb","amount":"$1.52","loan_required_duration":"11:30 PM","total_expenses":"$9.92","amount_approved":"$4.35","disbursed_on":"3/7/2023","installment_period":"7/12/2023","payment_duration":"5/23/2023","interest_rate":"$2.07","future_income_change":"$5.54","total_income":"$8.63","status":-0.82},
{"id":7,"user":"Gerard Newborn","loan_type":"jcb","amount":"$8.06","loan_required_duration":"4:29 AM","total_expenses":"$6.66","amount_approved":"$4.16","disbursed_on":"5/16/2023","installment_period":"8/14/2023","payment_duration":"4/16/2023","interest_rate":"$6.02","future_income_change":"$4.40","total_income":"$8.91","status":0.37},
{"id":8,"user":"Isaak Pioch","loan_type":"maestro","amount":"$8.69","loan_required_duration":"6:37 PM","total_expenses":"$6.51","amount_approved":"$9.24","disbursed_on":"12/6/2022","installment_period":"9/14/2023","payment_duration":"9/10/2023","interest_rate":"$2.83","future_income_change":"$0.23","total_income":"$2.57","status":0.1},
{"id":9,"user":"Lelia Whitwood","loan_type":"mastercard","amount":"$9.99","loan_required_duration":"5:45 PM","total_expenses":"$8.69","amount_approved":"$9.63","disbursed_on":"1/22/2023","installment_period":"11/21/2023","payment_duration":"11/16/2023","interest_rate":"$1.92","future_income_change":"$1.99","total_income":"$6.86","status":-0.92},
{"id":10,"user":"Sylvester Adlington","loan_type":"diners-club-carte-blanche","amount":"$8.74","loan_required_duration":"5:26 AM","total_expenses":"$9.01","amount_approved":"$2.55","disbursed_on":"5/19/2023","installment_period":"3/27/2023","payment_duration":"11/17/2023","interest_rate":"$8.08","future_income_change":"$9.50","total_income":"$0.39","status":1.13},
{"id":11,"user":"Ronald Salzburg","loan_type":"maestro","amount":"$0.07","loan_required_duration":"4:51 AM","total_expenses":"$7.11","amount_approved":"$9.29","disbursed_on":"5/1/2023","installment_period":"3/18/2023","payment_duration":"9/22/2023","interest_rate":"$6.49","future_income_change":"$8.15","total_income":"$4.33","status":-0.03},
{"id":12,"user":"Shelton Butchard","loan_type":"maestro","amount":"$2.00","loan_required_duration":"6:28 PM","total_expenses":"$9.61","amount_approved":"$2.24","disbursed_on":"1/8/2023","installment_period":"2/28/2023","payment_duration":"5/9/2023","interest_rate":"$0.19","future_income_change":"$4.11","total_income":"$6.65","status":0.44},
{"id":13,"user":"Adelaide Peetermann","loan_type":"china-unionpay","amount":"$5.18","loan_required_duration":"1:40 PM","total_expenses":"$4.94","amount_approved":"$7.85","disbursed_on":"7/9/2023","installment_period":"4/13/2023","payment_duration":"4/2/2023","interest_rate":"$4.38","future_income_change":"$7.38","total_income":"$8.08","status":-0.87},
{"id":14,"user":"Grove Farfoot","loan_type":"maestro","amount":"$5.17","loan_required_duration":"9:21 PM","total_expenses":"$6.89","amount_approved":"$9.16","disbursed_on":"2/14/2023","installment_period":"6/17/2023","payment_duration":"5/16/2023","interest_rate":"$2.10","future_income_change":"$5.39","total_income":"$4.49","status":-1.28},
{"id":15,"user":"Sarge Midson","loan_type":"visa-electron","amount":"$4.68","loan_required_duration":"1:51 AM","total_expenses":"$1.70","amount_approved":"$0.63","disbursed_on":"4/27/2023","installment_period":"12/13/2022","payment_duration":"10/8/2023","interest_rate":"$4.94","future_income_change":"$1.20","total_income":"$0.97","status":-1.26},
{"id":16,"user":"Domenico Julien","loan_type":"instapayment","amount":"$2.04","loan_required_duration":"5:21 AM","total_expenses":"$2.18","amount_approved":"$3.27","disbursed_on":"9/25/2023","installment_period":"10/16/2023","payment_duration":"12/7/2022","interest_rate":"$7.91","future_income_change":"$5.64","total_income":"$6.58","status":0.51},
{"id":17,"user":"Gilbert Boanas","loan_type":"jcb","amount":"$8.54","loan_required_duration":"10:00 AM","total_expenses":"$4.30","amount_approved":"$2.62","disbursed_on":"10/29/2023","installment_period":"3/27/2023","payment_duration":"7/6/2023","interest_rate":"$0.44","future_income_change":"$5.53","total_income":"$8.16","status":-1.36},
{"id":18,"user":"Babita Ruckledge","loan_type":"switch","amount":"$9.67","loan_required_duration":"7:24 PM","total_expenses":"$4.38","amount_approved":"$0.88","disbursed_on":"10/14/2023","installment_period":"1/9/2023","payment_duration":"7/29/2023","interest_rate":"$4.94","future_income_change":"$5.11","total_income":"$0.83","status":-1.03},
{"id":19,"user":"Deane Klaas","loan_type":"mastercard","amount":"$1.20","loan_required_duration":"4:59 PM","total_expenses":"$9.07","amount_approved":"$6.73","disbursed_on":"6/29/2023","installment_period":"5/6/2023","payment_duration":"3/27/2023","interest_rate":"$1.62","future_income_change":"$2.35","total_income":"$0.23","status":0.83},
{"id":20,"user":"Hildagard Bartlosz","loan_type":"jcb","amount":"$5.20","loan_required_duration":"6:08 AM","total_expenses":"$8.08","amount_approved":"$2.23","disbursed_on":"5/31/2023","installment_period":"11/30/2022","payment_duration":"7/5/2023","interest_rate":"$6.10","future_income_change":"$8.51","total_income":"$2.23","status":0.53}]
