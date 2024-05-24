"use client"


import Header from '@/components/Header';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

const Conseillers = () => {

    const [conseillers, setConseillers] = useState([]);
    const fetchConseillers = async () => {
        const response = await fetch('http://localhost:5001/api/users/conseiller', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        const data = await response.json();
        setConseillers(data.data);
    }

    useEffect(() => {
        fetchConseillers();
    }, []);


    return (
        <>
        <div className='bg-gray-100 min-h-screen'>
        <Header title='Liste des conseillers'/>
        <div className="p-4">
            <button className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                <Link href="/conseillers/create">
                    Ajouter un conseiller
                </Link>
            </button>
        </div>


        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                    <span>Nom </span>
                    <span className="sm:text-left text-right">Prenom</span>
                    <span className="hidden md:grid">Email</span>
                    <span className="hidden sm:grid">Profil</span>
                </div>
                <ul>
                {conseillers.map((conseillers: { _id: string, nom: string, prenom: string, phoneNumber: string, email: string, role: string, etabActu: string}) => (
                        <li key={conseillers._id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                            <div className="flex items-center">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <BsPersonFill className="text-purple-800"/>
                                </div>
                                <p className='pl-4'> {conseillers.nom } </p>
                            </div>
                            <p className="text-gray-600 sm:text-left text-right">
                                {conseillers.prenom}
                            </p>
                            <p className="hidden md:flex"> {conseillers.email} </p>
                            <div className="sm:flex hidden justify-between items-center">
                                <p> {conseillers.role} </p>
                                <BsThreeDotsVertical/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    
    </>
    );
};

export default Conseillers;