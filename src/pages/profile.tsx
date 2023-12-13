'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '@/app/globals.css'
import Image from "next/image";
import LoadingCircle from "@/components/loadingCircle";
import Head from "next/head";
import { NextPage } from "next";
import Sidebar from "@/components/sidebar";

const Profile: NextPage = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selected, setSelected] = useState(1); // Set default value
    const [age, setAge] = useState(18)

    const interestedStyle = "bg-gray-400 text-white px-3 w-28 py-1 rounded-2xl"
    const defaultStyle = "bg-gray-100 px-3 rounded-2xl py-1 mx-2"

    const user = require('../../helper/userData.json')
    let phone = ''
    if (typeof window !== 'undefined') {
        phone = localStorage.getItem('phone') || ''
    }

    const handleButtonClick = (buttonId:any) => {
        setSelected(buttonId);
    };

    useEffect(() => {
        if (!phone) router.push('/login')
        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 5000)
        // setIsLoading(true)
        const userData = user.filter((item: any) => item.phone === phone)
        if(userData.length === 0) router.push('/login')
        setData(userData)
    }, [])

    const handleAge = (e:any) => {
        console.log(e.target.value)
        setAge(e.target.value)
    }

    if (isLoading) return (
        <div className="min-h-screen bg-white flex justify-center p-52">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <Image src="/Logo.png" alt="" width={200} height={200} className="object-contain" />
                </div>
                <h1 className='font-bold text-6xl text-sky-600 text-center mb-4'>MateMatch</h1>
                <div className="flex justify-center">
                    <LoadingCircle />
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-white flex text-black">
            <Head>
                <title>MateMatch</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                data.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <div className="flex min-h-screen bg-white">
                                <Sidebar />
                                <div className="flex justify-center">
                                    <div className="flex flex-col">
                                        <div className="mb-10 p-5 border">
                                            <div className="flex justify-between">
                                                <p className="">
                                                </p>
                                                <p className="text-black text-center">
                                                    Settings
                                                </p>
                                                <a href="/home">x</a>
                                            </div>
                                            <hr className="border rounded-full w-[1014px] border-white"/>
                                        </div>
                                        <section className="px-32 flex justify-center mb-10">
                                            <div className="flex flex-col gap-3">
                                                <div className="border border-cyan-500 px-3 py-2 flex w-96 justify-between rounded-3xl">
                                                    <p className="text-cyan-500 text-center">
                                                        Notification
                                                    </p>
                                                    {/* Slide button */}
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="flex justify-center">
                                                    <span className="text-gray-400 text-sm">You will receive incoming message and notification</span>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bg-gray-200 px-16 py-5 mx-72 rounded-3xl flex flex-col gap-5">
                                            <div className="flex justify-between">
                                                <div>
                                                    <span className="font-medium text-lg text-start">Filter</span>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-lg text-start">---</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-5">
                                                <p className="font-light text-cyan-500">I'm interested in...</p>
                                                <div className="flex justify-between rounded-3xl bg-gray-100 shadow-xl">
                                                    <button id="1" className={
                                                        selected === 1 ? interestedStyle : defaultStyle
                                                    } onClick={()=>handleButtonClick(1)}>
                                                        Woman
                                                    </button>
                                                    <button id="2" className={
                                                        selected === 2 ? interestedStyle : defaultStyle
                                                    } onClick={()=>handleButtonClick(2)}>
                                                        Man
                                                    </button>
                                                    <button id="3" className={
                                                        selected === 3 ? interestedStyle : defaultStyle
                                                    } onClick={()=>handleButtonClick(3)}>
                                                        Everyone
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <p className="text-cyan-500">
                                                    Age
                                                </p>
                                                <div className="bg-white p-10 rounded-xl shadow-xl">
                                                    <p className="text-cyan-500 font-lig">Between 18-{age}</p>
                                                    <input type="range" name="age" id="age" min="18" max="35" className="w-full" value={age} onChange={(e)=>handleAge(e)}/>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <a href="/home" className="bg-cyan-700 px-3 py-1 rounded-2xl text-white w-28 text-center hover:bg-cyan-600">
                                                    Save
                                                </a>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profile