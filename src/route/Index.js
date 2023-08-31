import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import { ROLE } from "../constants/auth";
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
const Clients = React.lazy(() => import("../pages/main/leads/Clients"));
const Loan = React.lazy(() => import("../pages/main/loans/Loan"));
const Leads = React.lazy(() => import("../pages/main/leads/Leads"));

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* Dashboards */}
        {/* <Route exact path={`/nioicon`} component={NioIconPage} />
        <Route exact path={`/svg-icons`} component={SVGIconPage} />
        <Route exact path={`/loans`} component={Loans} />
        <Route exact path={`/leads`} component={Leads} />
        <PrivateRoute exact path={`/clients`} component={Clients} allowedRoles={[ROLE.Lender]} />
        <Route exact path={`/loan/:id`} component={Loan} />
        <Route exact path={`/lender-organizations`} component={LenderOrganizations} />
        <Route exact path={`/create-lender-organizations`} component={CreateLenderOrganizations} />
        <Route exact path={`/create-lender-user`} component={CreateLenderUser} />
        <Route exact path={`/lender-organization/:id`} component={ViewLenderOrganizationPage} />
        <Route exact path={`/lender-users`} component={LenderUsers} />
        <Route exact path={`/users`} component={Users} />
        <Route exact path={`/roles`} component={Roles} />
        <Route exact path={`/permissions`} component={Permissions} />
        <Route exact path={`/permissions/create`} component={AddPermission} />
        <Route exact path={`/`} component={Dashboard} /> */}
        <PrivateRoute exact path={`/nioicon`} component={NioIconPage} allowedRoles={[ROLE.Admin]} />
        <PrivateRoute exact path={`/svg-icons`} component={SVGIconPage} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={`/loans`} component={Loans} allowedRoles={[ROLE.Admin, ROLE.Lender]} />
        <PrivateRoute exact path={`/leads`} component={Leads} allowedRoles={[ROLE.Lender]} />
        <PrivateRoute exact path={`/clients`} component={Clients} allowedRoles={[ROLE.Lender]} />
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
        <PrivateRoute exact path={`/`} component={Dashboard} allowedRoles={[ROLE.Admin, ROLE.Lender]} />
        <Route component={RedirectAs404} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
