import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";

import Clients from "../pages/main/Clients";

import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";
import Lenders from "../pages/main/Lenders";
import Loans from "../pages/main/Loans";
import Dashboard from "../pages/main/Dashboard";


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
        <Route exact path={`${process.env.PUBLIC_URL}/lenders`} component={Lenders}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/clients`} component={Clients}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
