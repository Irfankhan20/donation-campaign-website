import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './Root.css';

const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;