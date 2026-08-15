import { Outlet } from "react-router-dom";

import Topbar from "../components/TopBar";
import NavBar from "../components/NavBar";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

import navLink from "../data/navLink";

function Layout () {
    return(
    <>
        <Topbar />
        <NavBar  navLinks={navLink}/>
        <MainNav navLinks={navLink}/>
        <Outlet />
        <Footer/>
    </>
    )
}

export default Layout