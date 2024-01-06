import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import { ROLE } from "../constants/roles";
import PrivateRoute from "./PrivateRoute";

const NioIconPage = React.lazy(() => import("../pages/components/crafted-icons/NioIcon"));
const SVGIconPage = React.lazy(() => import("../pages/components/crafted-icons/SvgIcons"));
const LenderOrganizations = React.lazy(() => import("../pages/main/lender/LenderOrganizations"));
const CreateLenderOrganizations = React.lazy(() => import("../pages/main/lender/CreateLenderOrganizations"));
const LenderUsers = React.lazy(() => import("../pages/main/lender/LenderUsers"));
const Loans = React.lazy(() => import("../pages/main/loans/Loans"));
const Dashboard = React.lazy(() => import("../pages/main/Dashboard"));
const ViewLenderOrganizationPage = React.lazy(() => import("../pages/main/lender/ViewLenderOrganizationPage"));
const Roles = React.lazy(() => import("../pages/main/accessControl/Roles"));
const Permissions = React.lazy(() => import("../pages/main/accessControl/Permissions"));
const Users = React.lazy(() => import("../pages/main/users/Users"));
const AddPermission = React.lazy(() => import("../pages/main/accessControl/AddPermission"));
const CreateLenderUser = React.lazy(() => import("../pages/main/lender/CreateLenderUser"));
const MyLeads = React.lazy(() => import("../pages/main/leads/MyLeads"));
const Loan = React.lazy(() => import("../pages/main/loans/Loan"));
const AllLeads = React.lazy(() => import("../pages/main/leads/AllLeads"));
const Profile = React.lazy(() => import("../pages/main/profile/Profile"));
const UserProfileInfo = React.lazy(() => import("../mainComponents/Profile/UserProfileInfo"));
const UploadsPage = React.lazy(() => import("../pages/main/borrower/UploadsPage"));
const TransactionsPage = React.lazy(() => import("../pages/main/borrower/TransactionsPage"));
const BorrowerLoansPage = React.lazy(() => import("../pages/main/borrower/BorrowerLoansPage"));
const RequestedLoansPage = React.lazy(() => import("../pages/main/borrower/RequestedLoansPage"));
const ApprovedLoansPage = React.lazy(() => import("../pages/main/borrower/ApprovedLoansPage"));
const RejectedLoansPage = React.lazy(() => import("../pages/main/borrower/RejectedLoansPage"));
const ContactLenderPage = React.lazy(() => import("../pages/main/borrower/ContactLenderPage"));
const ContactUserPage = React.lazy(() => import("../pages/main/borrower/ContactUserPage"));
const BusinessLoans = React.lazy(() => import("../pages/main/loans/BusinessLoans"));
const PersonalLoan = React.lazy(() => import("../pages/main/loans/PersonalLoans"));
const Mortgage = React.lazy(() => import("../pages/main/loans/Mortgage"));
const Subscriptions = React.lazy(() => import("../pages/main/subscription/Subscriptions"));
const Subscription = React.lazy(() => import("../pages/main/subscription/Subscription"));
const AllTickets = React.lazy(() => import("../pages/main/ticket/AllTickets"))
const Ticket = React.lazy(() => import("../pages/main/ticket/Ticket"));
const MyTickets = React.lazy(() => import("../pages/main/ticket/MyTickets"));
const ViewTicket = React.lazy(() => import("../pages/main/ticket/ViewTicket"));



const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* Dashboards */}
        <PrivateRoute exact path={`/nioicon`} component={NioIconPage} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/svg-icons`} component={SVGIconPage} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={`/loans`} component={Loans} allowedRoles={[ROLE.Admin, ROLE.Lender]} />
        <PrivateRoute exact path={`/leads`} component={AllLeads} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={`/my-leads`} component={MyLeads} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={`/loan/:id`} component={Loan} allowedRoles={[ROLE.Admin, ROLE.Lender]} />
        <PrivateRoute exact path={`/lender-organizations`} component={LenderOrganizations} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/create-lender-organizations`} component={CreateLenderOrganizations} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/create-lender-user`} component={CreateLenderUser} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/lender-organization/:id`} component={ViewLenderOrganizationPage} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/lender-users`} component={LenderUsers} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/users`} component={Users} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/roles`} component={Roles} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/permissions`} component={Permissions} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/permissions/create`} component={AddPermission} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/profile`} component={Profile} allowedRoles={[ROLE.Admin, ROLE.Lender, ROLE.User]} />
        <PrivateRoute exact path={`/user-profile-info`} component={UserProfileInfo} allowedRoles={[ROLE.Admin, ROLE.Lender]} />
        <PrivateRoute exact path={'/uploads'} component={UploadsPage} allowedRoles={[ROLE.User]} />
        <PrivateRoute exact path={'/transactions'} component={TransactionsPage} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={'/requested-loans'} component={RequestedLoansPage} allowedRoles={[ROLE.User]} />
        <PrivateRoute exact path={'/borrower-loans'} component={BorrowerLoansPage} allowedRoles={[ROLE.User]} />
        <PrivateRoute exact path={'/approved-loans'} component={ApprovedLoansPage} allowedRoles={[ROLE.User]} />
        <PrivateRoute exact path={'/rejected-loans'} component={RejectedLoansPage} allowedRoles={[ROLE.User]} />
        <PrivateRoute exact path={'/contact-lender'} component={ContactLenderPage} allowedRoles={[ROLE.User]} />
        <PrivateRoute exact path={'/contact-user'} component={ContactUserPage} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={'/business-loans'} component={BusinessLoans} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={'/personal-loans'} component={PersonalLoan} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={'/mortgage'} component={Mortgage} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={'/all-tickets'} component={AllTickets} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={'/ticket'} component={Ticket} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={'/my-tickets'} component={MyTickets} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={'/my-ticket/:_id'} component={ViewTicket} allowedRoles={[ROLE.Admin, ROLE.Lender]} />
        <PrivateRoute exact path={'/subscriptions'} component={Subscriptions} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={'/subscription'} component={Subscription} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={`/`} component={Dashboard} allowedRoles={[ROLE.Admin, ROLE.Lender, ROLE.User]} />
        <Route component={RedirectAs404} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
