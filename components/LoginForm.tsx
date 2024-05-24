"use client"


import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// Path: components/LoginForm.tsx
const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        console.log(email, password);
       
        if (!email || !password) {
            setError('All fields are required');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        setError('');
        
        try {
            const response = await fetch('http://localhost:5001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log(data);
            if (data.error) {
                setError(data.message);
                return;
            }

            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.userdata));
            router.push('/home');
        } catch (error) {
            console.log(error);
            setError('An error occurred');
        }

    }


    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img className="mx-auto h-10 w-auto" src="" alt="Your Company"/> */}
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label  className="block mb-2 text-sm font-medium">Adresse email</label>
                            <div className="mt-2">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label  className="block mb-2 text-sm font-medium">Mot de passe</label>
                            </div>
                            <div className="mt-2">
                            <input 
                                id="password" 
                                name="password" 
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                // onClick={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Sign in
                            </button>
                        </div>
                </form>           
            </div>
        </div>
    );
};

export default LoginForm;