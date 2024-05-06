"use client"

import React from 'react';
import { json } from 'stream/consumers';

const Header = ({title}: {title: string}) => {

    const userData = JSON.parse(localStorage.getItem('user') ?? '');
    console.log(userData )

    return (
        <div className='flex justify-between p-4'>
                <h2 className='font-bold text-xl'>{title}</h2>
                <h2>Welcome back, {userData ? userData.nom : ''} {userData ? userData.prenom : ''} </h2>
        </div> 
    );
};

export default Header;