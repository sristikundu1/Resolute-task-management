import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-white h-screen">

        <div className="max-w-6xl mx-auto pt-2 mb-28">

            <div className="grid grid-cols-7  mt-10 border-t-4 border-white  border-b-8 border-r-8 shadow-2xl pt-9 pr-7 pb-4 ">

                <div className=" col-span-4">
                    <img src="https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg" alt="" />
                </div>

                <div className=" col-span-3">
                    <h2 className="font-bold text-3xl text-center text-[#AC4425]">Login</h2>

                    <form onSubmit={handleLogin} >
                        <div className="">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Email</span>
                            </label>
                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                        </div>

                        <div className=" relative">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Password</span>
                            </label>

                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                            <span className='absolute top-14 right-3' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                            </span>

                        </div>


                        <input className="btn btn-block bg-[#006400] text-white  capitalize mt-5 font-bold text-xl " type="submit" value="Login" />

                    </form>


                    <div className=" flex flex-col justify-center items-center mt-3 ">
                        <Link to="/register">
                            <p className="text-[#D1A054] font-bold	text-center mt-2">New here? Create a New Account</p>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    </div>
    );
};

export default Login;