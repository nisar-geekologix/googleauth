'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

const Home = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <section className="min-h-screen flex justify-center items-center" >
                    <div className="container max-w-3xl border shadow-lg rounded-lg py-10">
                        <h1 className="font-bold text-4xl text-center">Welcome Back  <span className="text-sky-500" >{session.user.name}</span> </h1>
                        <h1 className="text-xl text-center py-5">You are signed in</h1>
                        <div className="flex justify-center">
                            <div className="flex items-center max-w-sm border shadow-sm px-5 py-3 rounded-lg">
                                <div className="rounded-full me-3">
                                    <Image src={session.user.image} width={50} height={50} alt="" className="rounded-full" />
                                </div>
                                <div className="profile-data">
                                    <div className="font-semibold" >{session.user.name}</div>
                                    <div className="" >{session.user.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 my-4">
                            <button onClick={() => signOut()} className="border-sky-100 text-lg font-semibold text-sky-500 bg-sky-100 hover:bg-sky-400 hover:text-white shadow-sm rounded-lg py-2 px-10 flex items-center">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <section className="min-h-screen flex justify-center items-center" >
            <div className="container max-w-3xl border shadow-lg rounded-lg py-10">
                <h1 className="font-bold text-4xl text-center">Welcome to Next js Authentication</h1>
                <h1 className="text-xl text-center py-5">You are not signed in</h1>
                <div className="flex justify-center gap-3 my-4">
                    <button onClick={() => signIn('google')} className="border shadow-sm rounded-lg py-2 px-10 flex items-center">
                        <Image src="/images/google.svg" width={30} height={30} alt="google logo" />
                        <span className="ms-3">Login with Google</span>
                    </button>
                    <button onClick={() => signIn("github")} className="border shadow-sm rounded-lg py-2 px-10 flex items-center">
                        <Image src="/images/GitHub.svg" width={70} height={70} alt="apple logo" />
                        <span className="ms-3">Login with Github</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
