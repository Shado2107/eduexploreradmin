"use client"

import { Main } from "next/document";
import Link from "next/link";
import React from "react";
import { FiLogOut, FiSettings, FiUsers } from "react-icons/fi";
import { RxDashboard, RxFile, RxPerson, RxSketchLogo } from "react-icons/rx";


const Sidebar = ({children}:any) => {

    const Logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    return (
        
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
               <div className="flex flex-col items-center">
                    <Link href="/home">
                        <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                            <RxSketchLogo size={30} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href="/home">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p- rounded-lg inline-block">
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <Link href="/etudiants">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href="/conseillers">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <FiUsers size={20} />
                        </div>
                    </Link>
                    <Link href="/programmes">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <RxFile size={20} />
                        </div>
                    </Link>
                    <Link href="/settings">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                    <Link href="" onClick={Logout}>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <FiLogOut size={20} />
                        </div>
                    </Link>
               </div>
            </div>
            <main className="ml-20 w-full"> {children} </main>
        </div>

    )
}

export default Sidebar;