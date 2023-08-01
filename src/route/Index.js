import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";

import Clients from "../pages/main/Clients";

import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";
import LenderOrganizations from "../pages/main/lender/LenderOrganizations";
import CreateLenderOrganizations from "../pages/main/lender/CreateLenderOrganizations";
import LenderUsers from "../pages/main/lender/LenderUsers";
import Loans from "../pages/main/Loans";
import Dashboard from "../pages/main/Dashboard";
import ViewLenderOrganizationPage from "../pages/main/lender/ViewLenderOrganizationPage";
import Roles from "../pages/main/accessControl/Roles";
import Permissions from "../pages/main/accessControl/Permissions";
import Users from "../pages/main/users/Users";
import AddPermission from "../pages/main/accessControl/AddPermission";
// import CreateLenderOrganizations from "../mainComponents/LenderOrg/ViewLenderOrganizationPage";


const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Dashboards*/}
        
        <Route exact path={`${process.env.PUBLIC_URL}/nioicon`} component={NioIconPage}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/svg-icons`} component={SVGIconPage}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/loans`} component={Loans}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/lender-organizations`} component={LenderOrganizations}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/create-lender-organizations`} component={CreateLenderOrganizations}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/lender-organization/:id`} component={ViewLenderOrganizationPage}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/lender-users`} component={LenderUsers}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/users`} component={Users}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/roles`} component={Roles}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/permissions`} component={Permissions}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/permissions/create`} component={AddPermission}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
