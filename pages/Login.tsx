const Login = () => {
    return (
        <div className="h-screen bg-zinc-800 flex flex-row justify-center items-center select-none">
            <div className="flex flex-col h-full w-full justify-center items-center">
                <h1 className="text-8xl uppercase font-black italic text-violet-500">Sciron</h1>
            </div>
            <div className="flex flex-col h-full w-full justify-center items-center">
                <div className="py-8 px-12 bg-zinc-900 flex flex-col justify-center items-center rounded-lg">
                    <div className="bg-violet-500 flex flex-col justify-center items-center px-4 py-3 rounded-lg drop-shadow-xl">
                        <h1 className="text-2xl font-black uppercase italic text-zinc-900">Login with Twitch</h1>
                    </div>
                    <label className="text-lg text-zinc-500 lowercase font-black italic">(recommended)</label>

                    <div className="py-3" />

                    <h1 className="text-lg font-black uppercase italic text-zinc-500">OR</h1>

                    <div className="py-4" />

                    <input className="w-full px-4 py-3 text-2xl font-black italic outline-none rounded-lg bg-zinc-500 text-zinc-900" type={'username'} placeholder={'USERNAME'} />

                    <div className="py-2" />

                    <input className="w-full px-4 py-3 text-2xl font-black italic outline-none rounded-lg bg-zinc-500 text-zinc-900" type={'password'} placeholder={'PASSWORD'} />

                    <div className="py-3" />

                    <div className="bg-violet-500 px-4 py-3 rounded-lg text-zinc-900">
                        <h1 className="text-2xl font-black uppercase italic">Sign Up</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login