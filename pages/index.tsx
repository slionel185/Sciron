import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home = () => {

    const router = useRouter()

    const getStartedClick = () => {
        router.push('/Login')
    }

    return (
        <>
            <Head>
                <title>Sciron</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='h-screen flex flex-col bg-zinc-800 justify-center items-center select-none'>
                <h1 className='text-9xl uppercase italic font-black drop-shadow-xl text-violet-500'>sciron</h1>
                <h1 className='text-3xl italic font-black drop-shadow-xl text-violet-600'>twitch.tv Dashboard</h1>

                <div className='py-8' />

                <div onClick={getStartedClick} className='px-8 py-3 flex justify-center items-center bg-zinc-900 hover:bg-violet-500 drop-shadow-xl rounded-lg text-violet-500 hover:text-app-bg-secondary select-none cursor-pointer transition-all ease-in-out duration-200'>
                    <h1 className='text-4xl italic font-black'>Get Started</h1>
                </div>
            </div>
        </>
    )
}

export default Home