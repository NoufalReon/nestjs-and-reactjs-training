import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

function Layout() {
  return (
    <div>
      <div className="container-fluid">
        <div className="">
          {/* <h1>Header</h1>
           */}
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
