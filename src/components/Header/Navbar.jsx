import { NavLink } from "react-router-dom";
import './Nav.css'

const Navbar = () => {

    const Links =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Donations">Donations</NavLink></li>
            <li><NavLink to="/Statistics">Statistics</NavLink></li>
        </>

    return (
        <div className="z-20">
            <div className="navbar  py-5">
                <div className="navbar max-w-6xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {Links}
                            </ul>
                        </div>
                        <img src="/Logo.png" alt="" className=" z-10 text-xl w-44"/>
                    </div>
                    <div className="navbar-end hidden md:flex z-10">
                        <ul className="flex gap-5 px-1 text-lg font-bold">
                            {Links}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;