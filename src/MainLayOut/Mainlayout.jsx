import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-24 min-h-[calc(100vh-132px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;