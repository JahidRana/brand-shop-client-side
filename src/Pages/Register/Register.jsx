import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
    const { register, profileUpdate, setLoading, googleLogin } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const [typed, setTyped] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        //error detection
        if (password.length < 6) {
          return Swal.fire({
            title: 'Error!',
            text: 'Password must be six characters or longer',
            icon:'error',
            confirmButtonText: 'Ok'
          })
        } else if (!/[A-Z]/.test(password)) {
          return Swal.fire({
            title: 'Error!',
            text: 'Password must have at least one capital letter',
            icon:'error',
            confirmButtonText: 'Ok'
          })
        }
        if (!/[\W_]/.test(password)) {
          return Swal.fire({
            title: 'Error!',
            text: 'Password must have at least one special character',
            icon:'error',
            confirmButtonText: 'Ok'
          })
        }
        //creating user
        register(email, password)
          .then((result) => {
            Swal.fire({
                title: 'Great!',
                text: 'User created successfully',
                icon:'success',
                confirmButtonText: 'Cool'
              })
            //update profile
            profileUpdate(name, photo).then(() => {
              setLoading(false);
            });
            console.log(result.user);
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
                <h2 className="text-3xl font-bold text-purple-500">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  name="photo" className="input input-bordered" required />
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
                    <div className="mt-3">
                        <input className="mr-1" type="checkbox" name="terms" id="terms" />
                        <label className="text-[13px]" htmlFor="terms">Accept our terms & conditions</label>
                    </div>
                    <div>
                        <input type="submit" className="bg-purple-500 w-full mt-6 rounded-md py-3 cursor-pointer text-white font-semibold" value="Register" />
                    </div>
                </form>
                <div className="flex items-center mt-4">
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
                    <p className="text-sm text-center">Already have account? <Link className="text-blue-800 font-semibold underline" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
// 