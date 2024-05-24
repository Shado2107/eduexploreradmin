"use client"


import { DeleteEtudiant, EditEtudiant } from '@/components/buttons';
import Header from '@/components/Header';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FiFile } from 'react-icons/fi';

const EtudiantsPage = () => {

    const [etudiants, setEtudiants] = useState([]);
    const fetchEtudiants = async () => {
        const response = await fetch('http://localhost:5001/api/users/etudiant', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        const data = await response.json();
        setEtudiants(data.data);
    }

    useEffect(() => {
        fetchEtudiants();
    }, []);

    return (
        <>
            <div className='bg-gray-100 min-h-screen'>
            <Header title='Liste des étudiants'/>


                <div className='p-4'>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                        <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                            <span>Nom complet</span>
                            <span className="sm:text-left text-right">Email</span>
                            <span className="hidden md:grid">Profil</span>
                            <span className="hidden sm:grid">Etablissement</span>
                        </div>
                        <ul>
                        {etudiants.map((etudiant: { _id: string, nom: string, prenom: string, phoneNumber: string, email: string, role: string, etabActu: string}) => (
                                <li key={etudiant._id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <BsPersonFill className="text-purple-800"/>
                                        </div>
                                        <p className='pl-4'> {etudiant.nom + ' ' + etudiant.prenom} </p>
                                    </div>
                                    <p className="text-gray-600 sm:text-left text-right">
                                        {etudiant.email}
                                    </p>
                                    <p className="hidden md:flex"> {etudiant.role} </p>
                                    <div className="sm:flex hidden justify-between items-center">
                                        <p> {etudiant.etabActu} </p>
                                    </div>
                                    <div className='flex justify-end gap-2'>
                                        <DeleteEtudiant id={etudiant._id}/>
                                        <EditEtudiant id={etudiant._id}/>

                                    </div>
                                </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className='mt-6 flow-root'>
                <div className='inline-block min-w-full align-middle'>
                    <div className='rounded-lg bg-gray-50 p-2 md:pt-0 '>
                        <div className='md:hidden'>
                            <div 
                                key={1}
                                className='mb-2 w-full rounded-md bg-white p-4'
                            >
                                <div >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default EtudiantsPage;