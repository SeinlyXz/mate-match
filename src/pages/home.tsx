import Conversation from "@/components/conversation";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className='min-h-screen bg-white flex text-black'>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen">
                <Conversation />
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <div className="mb-10 p-5 border">
                            <div className="flex justify-between">
                                <div>
                                    <p className="">
                                        
                                    </p>
                                </div>
                                <p className="text-black text-center">
                                    Home
                                </p>
                                <a href=""></a>
                                <hr className="border rounded-full w-[960px] border-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home