import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import PrimaryButton from '../../../Button/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout()
      .then(() =>
        navigate('/'))
      .catch(err => console.log(err))
  }

  const navItems = <>
    <li>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/contact'>Contact</Link>

    </li>
  </>

  const userItems = <>
    <li>
      <Link to='/addservice'>Dashboard</Link>

    </li>
  </>
  return (
    <div className="navbar bg-base-100 pt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            {navItems}
          </ul>
        </div>
        <div className='flex'>
          <Link to='/'>
            <img className='h-10 w-12 lg:block hidden md:block mt-2 px-2' src={logo} alt="" />
          </Link>
          <Link to='/'>
            <h1 className='text-2xl font-bold mt-3 pt-1'>iSells.com</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">


        <div>

          {
            user?.uid ?
              <div className='flex justify-between'>
                <div>
                  <ul className="menu menu-horizontal p-0 font-semibold">
                    {userItems}
                  </ul>
                </div>
                <div>
                  {
                    user?.photoURL && <img className='rounded-full w-8 h-8 flex mt-2' src={user.photoURL} alt="" />
                  }
                </div>
                <button onClick={handleSignOut}><PrimaryButton className="mx-auto ">Logout</PrimaryButton></button>
              </div>
              :
              <Link to='/login'><PrimaryButton className="mx-auto ">Login</PrimaryButton></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;