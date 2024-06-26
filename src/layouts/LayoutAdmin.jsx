import React from "react";
import { Outlet } from "react-router-dom";
//Components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutAdmin = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6"> 
      <Sidebar />
      <div className="lg:col-span-4 xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
