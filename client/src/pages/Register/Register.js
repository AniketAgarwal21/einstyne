import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import ToastRender from '../../utilities/ToastRender';

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitRegister = (email, password) => {
        const body = { email, password }

        // ToastRender({message:"this is a success message", type:"success"})
        // ToastRender({message:"this is an error message", type:"error"})

    }

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <ToastContainer />
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 lg:ml-6">
                    <h1 className="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
                    <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white text-lg font-medium title-font mb-5 text-center">Register</h2>
                    <div className="relative mb-4">
                        <label for="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="password" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button onClick={() => { submitRegister(email, password) }} className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Register</button>
                    <p className="text-xs mt-3">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Register
