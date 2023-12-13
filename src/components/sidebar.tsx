import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter()
    const [selected, setSelected] = useState(1)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')

    const interestedStyle = "bg-gray-300 px-3 py-1 relative right-3 rounded-2xl"

    const user = require('../../helper/userData.json')
    let phone = ''
    if (typeof window !== 'undefined') {
        phone = localStorage.getItem('phone') || ''
    }

    const handleButtonClick = (buttonId:any) => {
        setSelected(buttonId);
    };

    const handleLogout = () => {
        localStorage.removeItem('phone')
        router.push('/login')
    }


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
    return (
        <div className="flex flex-col gap-3 border w-96 p-5">
            <div className="flex justify-center mb-5">
                <div className="flex flex-col">
                    {
                        data.map((item:any) => (
                            <div key={item.id}>
                                <img src={item.photo} alt="" width={80} height={80} className="object-contain rounded-full" />
                                <p className="text-center">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col gap-3">
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-2xl w-72">MateMatch Pro</button>
                    <button className="bg-cyan-800 text-white px-3 py-2 rounded-2xl w-72">MateMatch Premium</button>
                    <button className="bg-gray-400 text-white px-3 py-2 rounded-2xl w-72">MateMatch Custom</button>
                </div>
            </div>

            <section className="flex flex-col gap-5 mt-5">
                <button
                    id="1"
                    className={`${selected === 1 ? "text-gray-700" : "text-gray-400"
                        } text-xl`}
                    onClick={() => handleButtonClick(1)}
                >
                    Edit Profile
                </button>
                <button
                    id="2"
                    className={`${selected === 2 ? "text-gray-700" : "text-gray-400"
                        } text-xl`}
                    onClick={() => handleButtonClick(2)}
                >
                    Settings
                </button>
                <button
                    id="3"
                    className={`${selected === 3 ? "text-gray-700" : "text-gray-400"
                        } text-xl`}
                    onClick={() => handleButtonClick(3)}
                >
                    Contacts & FAQs
                </button>
                <button
                    id="4"
                    className={`${selected === 4 ? "text-gray-700" : "text-gray-400"
                        } text-xl`}
                    onClick={() => handleLogout()}
                >
                    Logout
                </button>
            </section>
        </div>
    )
}
