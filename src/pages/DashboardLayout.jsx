import { Outlet, Link } from "react-router-dom";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Dashboard from "./dashboard";

const DashboardLayout = () => {
  return (
    <>
      <Dashboard />

      <Outlet />
    </>
  );
};

export default DashboardLayout;
