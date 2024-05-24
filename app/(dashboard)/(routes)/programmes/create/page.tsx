'use client'

import { on } from 'events';
import React, { useState } from 'react';

const createProgramme = () => {

    const [programmes, setProgrammes] = useState([{ libelle: '', duree: '', description: '' }]);
    const [etablissement, setEtablissement] = useState([{ nom: '', adresse: '', tel: '', site: '' }]);
    const [domaine, setDomaine] = useState('');
    const [desc, setDesc] = useState('');


    const handleSubmit = (index: any, e : any) => {
        const newFields = [...programmes];
        newFields[index] = { ...newFields[index], [e.target.name]: e.target.value};
        setProgrammes(newFields);  
    }

    const addProgramme = () => {
        setProgrammes([...programmes, { libelle: '', duree: '', description: ''}]);
    }
    

    const removeProgramme = (index: any) => {
        const newFields = [...programmes];
        newFields.splice(index, 1);
        setProgrammes(newFields);
    }

    const addEtablissiment = () => {
        setEtablissement([...etablissement, { nom: '', adresse: '', tel: '', site: ''}]);
    }

    const removeEtablissiment = (index: any) => {
        const newFields = [...etablissement];
        newFields.splice(index, 1);
        setEtablissement(newFields);
    }

    



    onsubmit = (e) => { 
        e.preventDefault();
       
        const data = {
            domaine,
            programmes,
            desc
        }

        console.log(data);
    }





    return (
        <section className="bg-white">
            <div className="py-10 px-4 mx-auto max-w-2xl lg:py-12">
                <h2 className="mb-4 text-xl font-bold">Ajouter un nouveau programme d'étude</h2>
                <form action="#">
                    <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
                        <div className="sm:col-span-12">
                            <label className="block mb-2 text-sm font-medium">Domaine d'etude</label>
                            <input
                                type="text"
                                name="Libelle du domaine"
                                id="domaine"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="nom du domaine d etude"
                                onChange={(e) => setDomaine(e.target.value)}
                            />
                        </div>
                        
                        {programmes.map((programme, index) => (

                            <div key={index} className="w-full sm:col-span-12 flex flex-row gap-1">
                                
                                <div className="w-full sm:col-span-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Libelle de la formation</label>
                                    <input
                                        type="text"
                                        name="libelle"
                                        id="libelle"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="libelle de la formation"
                                        onChange={(e) => handleSubmit(index, e)}
                                    />
                                </div>
                                <div className="w-full sm:col-span-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Durée de la formation</label>
                                    <input
                                        type="number"
                                        name="duree"
                                        id="duree"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="durée de la formation"
                                        onChange={(e) => handleSubmit(index, e)}
                                    />
                                </div>
                                <div className="w-full sm:col-span-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Description de la formation</label>
                                    <input
                                        type="texte"
                                        name="description"
                                        id="description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="description"
                                        onChange={(e) => handleSubmit(index, e)}
                                    />
                                </div>
                                <div className='flex justify-center items-center gap-1'> 
                                    <div className='mt-6'>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full focus:ring-primary-600 focus:border-primary-600"
                                            onClick={addProgramme}

                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='mt-6'>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center w-10 h-10 bg-red-700 text-white rounded-full focus:ring-primary-600 focus:border-primary-600"
                                            onClick={() => removeProgramme(index)}
                                            
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 12H18"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                         ))}

                        
                      


                        <div className="sm:col-span-12">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea
                                id="description"
                                rows={8}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Your description here"
                                onChange={(e) => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                      
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
                    >
                        Ajouter le programme d'étude
                    </button>
                </form>
            </div>
        </section>
    );
};

export default createProgramme;