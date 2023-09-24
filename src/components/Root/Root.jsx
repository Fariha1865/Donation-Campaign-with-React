import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import './Root.css'

const Root = () => {

    const {pathname} = useLocation();
    console.log(pathname)
    return (
        <div>
            <div className={pathname === "/"? "bannerImage h-[500px]":""}>
            <div className={pathname==="/" ? "absolute inset-0 bg-white opacity-90":""}></div>
                <div className="opacity-1">
                <Navbar></Navbar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;