import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Pages/Providers/AuthProviders";
import { useContext } from "react";


const Navbar = () => {
    const { user,logOut  } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const navLinks = <>
        <ul className="flex gap-9 text-lg font-semibold" >
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#91B029] underline italic" : ''
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-task"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#91B029] underline italic" : ''
                    }
                >
                    Add Task
                </NavLink>
            </li>
        </ul>
    </>

    return (
        <div className="navbar bg-transparent px-16">
            <div className="navbar-start flex flex-col">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
              

                    <h2 className="btn btn-ghost font-bold text-3xl text-[#004b23] mr-96">Task</h2>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex flex-col lg:navbar-end lg:flex lg:flex-row ">

                {
                    user ? <>

                        <button 
                        onClick={handleLogOut} 
                        className="bg-[#006400]  border rounded-lg h-10 w-28 py-1 px-9 font-semibold text-white">LogOut</button>

                    </>
                        :
                        <>
                           
                            <Link to="/login">
                                <button className="btn bg-[#006400] text-white">Login</button>
                            </Link>
                        </>
                }
            </div>


        </div>
    );
};

export default Navbar;