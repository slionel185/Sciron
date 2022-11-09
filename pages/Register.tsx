import React from 'react'
import { FaTwitch } from 'react-icons/fa'

const Register = () => {

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form Submitted')
    }

    return (
        <div className="h-screen bg-app-bg-main flex justify-center items-center uppercase">
            <div className="flex flex-col w-1/2 justify-center">
                <h1 className="text-9xl font-black italic text-app-text-main drop-shadow-title">sciron</h1>
                <h1 className="text-5xl font-black italic text-app-text-main drop-shadow-title">Twitch.tv dashboard</h1>

                <ul className='marker:text-app-text-main drop-shadow-md list-inside mt-12 text-5xl text-app-text-light font-extrabold italic'>
                    <li>Monitor chat</li>
                    <div className='pt-2' />
                    <li>Custom Commands</li>
                    <div className='pt-2' />
                    <li>Enable/Disable Commands</li>
                    <div className='pt-2' />
                    <li>Integrated music player</li>
                </ul>
            </div>
            <div className="flex flex-col bg-app-bg-secondary rounded-xl w-1/3 uppercase drop-shadow-lg">
                <div className="py-8" />
                
                <div className="bg-app-text-main p-4 px-8 m-auto rounded-md drop-shadow-md flex justify-center items-center">
                    <h1 className='text-3xl font-extrabold text-app-text-secondary drop-shadow-md m-auto pr-3'><FaTwitch /></h1>
                    <h1 className="text-2xl font-extrabold italic text-app-text-secondary drop-shadow-md">login with twitch</h1>
                </div>

                <div className="py-6" />

                <div className="w-full relative flex px-24 items-center">
                    <div className="flex-grow border-t-2 border-app-text-light drop-shadow-md"></div>
                    <span className="flex-shrink mx-4 font-extrabold italic text-app-text-main drop-shadow-md">or</span>
                    <div className="flex-grow border-t-2 border-app-text-light drop-shadow-md"></div>
                </div>

                <div className='py-4' />

                <div className="h-full flex flex-grow justify-center items-center">
                    <form onSubmit={onFormSubmit} className='flex flex-col w-full uppercase px-24'>
                    <label className='text-lg text-app-text-light font-bold italic'>EMAIL</label>
                        <input className='text-3xl px-4 py-2 bg-app-text-light rounded-md text-app-text-secondary border-none outline-none' type='text'/>

                        <div className='py-2' />

                        <label className='text-lg text-app-text-light font-bold italic'>PASSWORD</label>
                        <input className='text-3xl px-4 py-2 bg-app-text-light rounded-md text-app-text-secondary border-none outline-none' type='password'/>

                        <div className='py-2' />

                        <label className='text-lg text-app-text-light font-bold italic'>CONFIRM PASSWORD</label>
                        <input className='text-3xl px-4 py-2 bg-app-text-light rounded-md text-app-text-secondary border-none outline-none' type='password'/>

                        <div className='py-5' />

                        <input className='text-3xl p-4 px-8 m-auto rounded-md text-app-text-secondary font-extrabold bg-app-text-main italic drop-shadow-md hover:bg-app-text-hover' type='submit' value='REGISTER' />

                        <div className='py-8' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register