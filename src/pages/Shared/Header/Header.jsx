import React from 'react';
import headerLogo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {
    return (
        <div className='default-container mt-16'>


            <div className='flex flex-col gap-4'>
                <img className='mx-auto' src={headerLogo} alt="" />

                <p className="text-center">Journalism Without Fear or Favour</p>

                <p className='text-center'>
                    <span className='font-semibold'>{moment().format('dddd, ')}</span>{moment().format('MMMM Do YYYY')}
                </p>

                <div className='p-2 box-border bg-slate-100 flex gap-4'>
                    <span className='font-semibold text-lg bg-red-700 text-white px-3 py-2'>
                        Latest
                    </span>

                    <Marquee gradient={false} speed={50}>
                        <span className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi et delectus esse atque amet molestias error aliquid eligendi sapiente! Possimus ipsam dolore veritatis.</span>
                    </Marquee>

                </div>
            </div>

            {/* navbar starts here */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Carrer</a></li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Carrer</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <FaRegUserCircle className='text-2xl'></FaRegUserCircle>
                    <a className="text-lg font-semibold bg-gray-700 text-white px-3 py-2">Login</a>
                </div>
            </div>


        </div>
    );
};

export default Header;