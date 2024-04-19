"use client"

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiFile } from "react-icons/fi";

const Programmespage = () => {

    const [programmes, setProgrammes] = useState([]);
    const fetchProgrammes = async () => {
        const response = await fetch('http://localhost:3000/api/programmes');
        const data = await response.json();
        setProgrammes(data.data);
    }

    useEffect(() => {
        fetchProgrammes();
    }, []);


    console.log(programmes);


    return (  
        <>
           <Header title='Programmes' />
            <div className='p-4'>
                <div className="w-full m-auto border rounded-lg bg-white overflow-y-auto">
                    <div className="my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Nom</span>
                        <span className='sm:text-left text-right'>Description</span>
                        <span className="hidden md:grid">Date de début</span>
                        <span className="hidden sm:grid">Date de fin</span>
                        <span className="hidden sm:grid">Date de fin</span>
                        <span className="hidden sm:grid">Date de fin</span>
                        
                    </div>
                    <ul>
                        {programmes.map((programme: { domaine: string, name: string, description: string, start_date: string, end_date: string }) => (
                            <li key={programme.domaine} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <FiFile className="text-purple-500" />
                                    </div>
                                    <p className="pl-4" > {programme.domaine} </p>
                                </div>
                                <p className="text-gray-600 sm:text-left text-right">
                                   @gmail.com
                                </p>
                                <p className="hidden md:flex">  </p>
                                <div className="sm:flex hidden justify-between items-center">
                                    <p> ,n </p>
                                    <BsThreeDotsVertical/>
                                </div>
                              
                            </li>
                        ))}
                    
                    </ul>
                </div>
            </div>        
        </>

    )
}

export default Programmespage;