import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="md:flex h-screen p-2">
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
