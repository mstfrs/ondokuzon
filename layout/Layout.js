import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="md:flex h-screen p-2 bg-gradient-to-r from-sky-500 to-indigo-500">
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
