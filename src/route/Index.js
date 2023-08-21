import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";

// import Clients from "../pages/main/Clients";

import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";
import LenderOrganizations from "../pages/main/lender/LenderOrganizations";
import CreateLenderOrganizations from "../pages/main/lender/CreateLenderOrganizations";
import LenderUsers from "../pages/main/lender/LenderUsers";
import Loans from "../pages/main/loans/Loans";
import Dashboard from "../pages/main/Dashboard";
import ViewLenderOrganizationPage from "../pages/main/lender/ViewLenderOrganizationPage";
import Roles from "../pages/main/accessControl/Roles";
import Permissions from "../pages/main/accessControl/Permissions";
import Users from "../pages/main/users/Users";
import AddPermission from "../pages/main/accessControl/AddPermission";
import CreateLenderUser from "../pages/main/lender/CreateLenderUser";
import Clients from "../pages/main/leads/Clients";
import Loan from "../pages/main/loans/Loan";
import Leads from "../pages/main/leads/Leads";
// import CreateLenderOrganizations from "../mainComponents/LenderOrg/ViewLenderOrganizationPage";


const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Dashboards*/}
        
        <Route exact path={`/nioicon`} component={NioIconPage}></Route>
        <Route exact path={`/svg-icons`} component={SVGIconPage}></Route>
        <Route exact path={`/loans`} component={Loans}></Route>
        <Route exact path={`/leads`} component={Leads}></Route>
        <Route exact path={`/clients`} component={Clients}></Route>
        <Route exact path={`/loan/:id`} component={Loan}></Route>
        <Route exact path={`/lender-organizations`} component={LenderOrganizations}></Route>
        <Route exact path={`/create-lender-organizations`} component={CreateLenderOrganizations}></Route>
        <Route exact path={`/create-lender-user`} component={CreateLenderUser}></Route>
        <Route exact path={`/lender-organization/:id`} component={ViewLenderOrganizationPage}></Route>
        <Route exact path={`/lender-users`} component={LenderUsers}></Route>
        <Route exact path={`/users`} component={Users}></Route>
        <Route exact path={`/roles`} component={Roles}></Route>
        <Route exact path={`/permissions`} component={Permissions}></Route>
        <Route exact path={`/permissions/create`} component={AddPermission}></Route>
        <Route exact path={`/`} component={Dashboard}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
