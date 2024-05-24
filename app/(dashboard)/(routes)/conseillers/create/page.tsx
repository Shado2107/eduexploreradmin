"use client";

import Header from '@/components/Header';
import React, { useState } from 'react';

const createConseiller = () => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const addConseiller = async (e:any) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formData: {
                    nom,
                    prenom,
                    email,
                    phone,
                    password
                },
                role: 'conseiller'
            })
        });

        const data = await response.json();
        console.log(data);
    }


    return (
       <>
        <Header title='Ajouter un conseiller'/>
        <section className="bg-white">
            <div className="py-10 px-4 mx-auto max-w-2xl lg:py-12">
                <h2 className="mb-4 text-xl font-bold">Ajouter un nouveau conseiller</h2>
                <form action="#">
                    <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
                        <div className="sm:col-span-6">
                            <label className="block mb-2 text-sm font-medium">Nom</label>
                            <input
                                type="text"
                                name="Libelle du domaine"
                                id="domaine"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="nom du domaine d etude"
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>
                        <div className="sm:col-span-6">
                            <label className="block mb-2 text-sm font-medium">Prenom</label>
                            <input
                                type="text"
                                name="Libelle du domaine"
                                id="domaine"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="nom du domaine d etude"
                                onChange={(e) => setPrenom(e.target.value)}
                            />
                        </div>
                        <div className="sm:col-span-6">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="Libelle du domaine"
                                id="domaine"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="nom du domaine d etude"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full sm:col-span-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Téléphone</label>
                            <input
                                type="number"
                                name="item-weight"
                                id="item-weight"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="12"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="sm:col-span-6">
                            <label className="block mb-2 text-sm font-medium">Mot de passe</label>
                            <input
                                type="password"
                                name="Libelle du domaine"
                                id="domaine"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="nom du domaine d etude"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                      
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
                        onClick={addConseiller}
                    >
                        Ajouter le conseiller
                    </button>
                </form>
            </div>
        </section>
       
       </>
    );
};

export default createConseiller;