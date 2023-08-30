import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ onClickWallet, user }) => {
  return (
    <>
      <Navbar onClickWallet={onClickWallet} user={user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
