import Login from '@/pages/login'
import Image from 'next/image'

export default function Home() {
  return (
      <div className='min-h-screen bg-slate-500'>
          <div className='flex justify-center'>
            Go To
            <a href="/login">
              Login Page
            </a>
          </div>
      </div>
  )
}
