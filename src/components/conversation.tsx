import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";

export default function Conversation(){
    const router = useRouter()
    const [data, setData] = useState([])

    const user = require('../../helper/userData.json')
    let phone = ''
    if (typeof window !== 'undefined') {
        phone = localStorage.getItem('phone') || ''
    }

    useEffect(() => {
        if (!phone) router.push('/login')
        const userData = user.filter((item: any) => item.phone === phone)
        if(userData.length === 0) router.push('/login')
        setData(userData)
    }, [])

    return (
        <div className="flex flex-col gap-3 border w-96 p-5">
            <div className="flex justify-center mb-5">
                <div className="flex flex-col">
                    <div>
                        {
                            data.map((item:any) => (
                                <div key={item.id}>
                                    <a href="/profile">
                                        <img src={item.photo} alt="" width={80} height={80} className="object-contain rounded-full" />
                                        <p className="text-center">{item.name}</p>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}