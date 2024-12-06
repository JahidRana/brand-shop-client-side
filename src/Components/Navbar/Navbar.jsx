import { Link, NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../assets/weblogo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Logged out successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-left underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
                : ""
            }
          >
            Cart
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="px-3 pb-12 shadow-lg bg-slate-700 max-w-[1640px] mx-auto">
      <div className="flex justify-between items-center">
        {/* Wrap the logo and text inside a Link to navigate to the homepage */}
        <Link to="/" className="flex items-center justify-center gap-1 md:gap-2">
          <img className="w-10 md:w-14 rounded-full" src={logo} alt="logo" />
          <h2 className="font-extrabold text-lg md:text-2xl lg:text-5xl text-orange-500">GadgetGrove</h2>
        </Link>

        <ul
          className={`md:grid md:grid-cols-3 lg:flex gap-2 lg:gap-6 text-center text-orange-500 font-semibold md:text-lg bg-zinc-700 md:bg-inherit p-4 rounded-md order-last md:order-none absolute md:static right-7 duration-1000 ${
            open ? "top-8" : "hidden"
          }`}
        >
          {navLinks}
          {user ? (
            <li className="md:hidden">
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="md:hidden">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        <div>
          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <>
              {user ? (
                <div className="flex items-center gap-2 lg:gap-3">
                  <span className="text-white font-semibold">{user.displayName}</span>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="user avatar" />
                    </div>
                  </label>
                  <button
                    onClick={handleLogout}
                    className="bg-purple-500 py-2 px-4 text-lg rounded-sm text-white font-semibold hidden md:block"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-slate-700 border py-2 px-4 text-lg rounded-sm text-white font-semibold hidden md:inline"
                >
                  Login
                </Link>
              )}
            </>
          )}
          <input onClick={handleThemeSwitch} type="checkbox" className="toggle ml-2" />
        </div>

        <div onClick={() => setOpen(!open)} className={`md:hidden order-last md:order-none`}>
          <CiMenuKebab />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
