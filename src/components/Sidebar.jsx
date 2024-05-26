import { AlertCircle, Edit3, History, Home, Search } from 'lucide-react'
import React from 'react'
import Tooltip from './Tooltip'
import { Route, Routes } from 'react-router-dom';
import About from "../About";
export default function Sidebar() {
  const username = localStorage.getItem("name");
  const logout = () => {
    localStorage.removeItem("SignUp");
    window.location.reload()
  }
  const shows = () => {
    setShowHome((showHome) => !showHome)
  }
  return (
    <>
    <Routes>
      <Route path='/' />
    </Routes>
     <div className="flex fixed font-sans text-gray-900">
       <aside className="flex h-screen w-[72px] flex-col items-center border-r border-gray-200 bg-red-400 dark:bg-gray-900">
         <div className="flex h-16 w-full items-center justify-center border-b border-gray-200">
            <h1 className="text-emerald-400 text-[26px] font-bold">hulu</h1>
         </div>
         <nav className="flex flex-1 flex-col gap-y-4 pt-8">
          <a className="relative group rounded-xl dark:bg-white dark:hover:bg-white/90 dark:text-slate-900 bg-slate-900 p-2 text-white hover:bg-slate-800" href="/">
            <Home className="h-6 w-6 stroke-current" />
            <Tooltip>Home</Tooltip>
          </a>
            <a className="relative group rounded-xl p-2  text-gray-400 hover:bg-gray-100" href="">
              <History className='w-6 h-6 stroke-current' />
              <Tooltip>History</Tooltip>
            </a>
            <a className="relative group rounded-xl p-2  text-gray-400 hover:bg-gray-100" href="">
              <Search className='w-6 h-6 stroke-current' />
              <Tooltip>Search</Tooltip>
            </a>
         </nav>
         <div className="flex flex-col items-center gap-y-4 py-3">
         
         <button className="relative group rounded-xl p-2  text-gray-400 hover:bg-gray-100" href="">
              <AlertCircle className='w-6 h-6 stroke-current' />
              <Tooltip>About</Tooltip>
            </button>
            <a>
            <button className="relative group rounded-xl p-1  text-gray-400" href="">
              <div className="w-12 text-gray-900 font-bold h-12 stroke-current bg-emerald-400 text-lg rounded-full flex items-center justify-center">
              <div onClick={logout} className="w-5 h-5 cursor-pointer absolute top-1 mr-8">
               <Edit3 className="w-full h-full dark:text-white" />
              </div>
               {username[0]}
              </div>
              <Tooltip>{username}</Tooltip>
            </button>
            </a>
         </div>
       </aside>
     </div>
     </>
)
}
