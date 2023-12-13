'use client'
import '@/app/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, use } from 'react'

export default function Login () {
    useEffect(() => {
        if(localStorage.getItem('phone')) {
            router.push('/profile')
        }
    }, [])
    const router = useRouter()
    const location = "Indonesia"
    const phoneCode = require('../../helper/phoneCode.json')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')

    const handleLogin = (e:any) => {
        e.preventDefault()
        if(phone === '') {
            alert('Please fill the form')
            return
        }
        localStorage.setItem('phone', phone)
        router.push('/profile')
    }

    const handlePhone = (e:any) => {
        // if not number, cannot input
        e.preventDefault()
        setPhone(e.target.value)
        console.log(phone)
    }

    const handleCode = (e:any) => {
        e.preventDefault()
        setCode(e.target.value)
        console.log(code)
    }

    return (
        <main className='flex justify-center min-h-screen bg-white p-32'>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='flex flex-col'>
                <section className='flex flex-col'>
                    <section className='flex flex-col'>
                        <h1 className='font-bold text-6xl text-sky-600 text-center mb-4'>MateMatch</h1>
                        <h2 className='font-light text-3xl text-gray-400 text-center'>Hi, Let's Sign You Up</h2>
                    </section>
                    <section className='flex flex-col'>
                        <section className='mb-7 mt-10'>
                            <Link href='#'>
                                <p className='bg-blue-500 rounded-xl py-3 px-3 mb-2 hover:bg-blue-400 text-center w-96'>Continue With Facebook</p>
                            </Link>
                            <Link href='#'>
                                <p className='bg-rose-500 rounded-xl py-3 px-3 mb-2 hover:bg-rose-400 text-center w-96'>Continue With Google</p>
                            </Link>
                        </section>
                        <div className='w-96'>
                            <hr className='border border-gray-300 mb-3 rounded-2xl'/>
                            <p className='relative text-gray-400 bottom-7 text-xl text-center bg-white rounded-xl w-10 left-44'>or</p>
                        </div>
                    </section>
                </section>
                <section className='-mt-7'>
                    <form>
                        <select name="code" id="" className='relative text-gray-400 top-8 left-4'>
                            {
                                phoneCode.map((item:any, index:any) => {
                                    return (
                                        <option key={index} value={item.code} selected={item.name === location} onChange={handleCode}>{item.code}</option>
                                    )
                                })
                            }
                        </select>
                        <input className='border border-teal-700 rounded-xl py-2 mb-2 text-gray-800 w-full ps-20' type='number' placeholder='enter your phone number' onChange={handlePhone}/>
                        <div className='flex justify-center'>
                            <button className='bg-sky-500 hover:bg-sky-600 text-white rounded-xl py-1 px-2 mb-2 w-28' type='submit' onClick={handleLogin}>Continue</button>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    )
}