import { NavLink } from "react-router-dom";


const Header = () => {
    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    return (
        <div className="flex justify-between navbar pt-8">

            <div className="">
                <img className="w-[200px]" src="https://i.ibb.co/Wc2tTz2/Logo.png" alt="" />
            </div>
            <div className="flex-none gap-4">
                <ul className="menu menu-horizontal px-1">

                    {link}
                </ul>
            </div>
        </div>
    );
};

export default Header;