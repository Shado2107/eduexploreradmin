"use client"

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFile, BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
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
           <div className='bg-gray-100 min-h-screen'>
                <Header title='Programmes' /> 
                <div className="p-4">
                    <button className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                        <Link href="/programmes/create">
                            Ajouter un programme
                        </Link>
                    </button>
                </div>
                
                
                <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Domaine de formation</span>
                        <span className="sm:text-left text-right">Formations</span>
                        <span className="hidden md:grid">Description</span>
                        <span className="hidden sm:grid">Débouchés</span>
                    </div>
                    <ul>
                    {programmes.map((programme: {_id: string, domaine: string, formations: any, description: string, debouches: any}) => (
                            <li key={programme._id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <BsFile className="text-purple-800"/>
                                    </div>
                                    <p className='pl-4'> {programme.domaine} </p>
                                </div>
                                <p className="text-gray-600 sm:text-left text-right">
                                    <ul>
                                        {
                                            programme.formations.map((formation: { _id: string, libelle: string, niveau: string, duree: string, description: string, debouches: string}) => (
                                                
                                                    <li key={formation._id}>{formation.libelle}</li>
                                            
                                            ))
                                        }
                                    </ul>
                                </p>
                                <p className="hidden md:flex"> {programme.description.substring(0, 60)}... </p>
                               

                                <div className="sm:flex hidden justify-between items-center">
                                    <ul>
                                        {
                                            programme.debouches.map((debouche: { _id: string, libelle: string, description: string}) => (
                                                
                                                    <li key={debouche._id}>{debouche.libelle}</li>
                                            
                                            ))
                                        }
                                    </ul>
                                    <BsThreeDotsVertical/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
                 
               
            </div>
        </>

    )
}

export default Programmespage;