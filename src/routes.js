import React from "react";
import Dashboard from "./pages/Dashboard";
import CustomerTablePage from "./pages/CustomerTablePage";

const routeArray = [


  // This is used for show the customer table
  { params: "customer-table", component: <CustomerTablePage /> },
  { params: "dashboard", component: <Dashboard /> },


];

export default routeArray;
