import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { login, setLoading, googleLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [typed, setTyped] = useState("");
    const navigate=useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        //sign in
        login(email, password)
          .then((result) => {
            console.log(result.user);
            Swal.fire({
                title: 'Great!',
                text: 'Logged in successfully',
                icon:'success',
                confirmButtonText: 'Cool'
              })
            navigate('/');
          })
          .catch((error) => {
            setLoading(false);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon:'error',
                confirmButtonText: 'Ok'
              })
          });
      };
      const handleGoogleSign=()=>{
        googleLogin()
        .then(()=>{
            Swal.fire({
                title: 'Great!',
                text: 'Successfully signed in with Google',
                icon:'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error=>{
            setLoading(false);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon:'error',
                confirmButtonText: 'Ok'
              })
        })
      }
      const handlePassword = (e) => {
        setTyped(e.target.value);
      };

    return (
        <div className="bg-gray-200 min-h-[85vh] md:pt-12 max-w-[1440px] mx-auto dark:text-black">
        <div className="md:w-3/4 lg:w-[32%] mx-auto bg-white pt-14 pb-6 px-14 rounded-md">
            <h2 className="text-3xl font-bold text-purple-500">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  name="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input type={show ? "text" : "password"} onChange={handlePassword} name="password" className="w-full input input-bordered" required />
                        {typed && (
                            <span
                            className="absolute top-4 right-5 text-lg cursor-pointer"
                            onClick={() => setShow(!show)}
                            >
                            {show ? (
                                <AiFillEye></AiFillEye>
                            ) : (
                                <AiFillEyeInvisible></AiFillEyeInvisible>
                        )}
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <input type="submit" className="bg-purple-500 w-full mt-6 rounded-md py-3 cursor-pointer text-white font-semibold" value="Login" />
                </div>
                <div className="mt-3 text-right">
                    <p className="text-gray-400 text-sm pr-2 cursor-pointer">Forgot password?</p>
                </div>
            </form>
            <div className="flex items-center mt-6">
                <div className="w-1/2 h-[2px] bg-gray-400"></div>
                <div className="border-2  px-1">Or</div>
                <div className="w-1/2 h-[2px] bg-gray-400"></div>
            </div>
            <div className="w-full">
                <div className="mt-4 mx-auto w-max border rounded-full p-2 border-gray-500">
                    <span onClick={handleGoogleSign}><FcGoogle className="text-3xl cursor-pointer"></FcGoogle></span >
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm text-center">Need an account?<Link className="text-blue-800 font-semibold underline" to='/register'>Register</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Login;