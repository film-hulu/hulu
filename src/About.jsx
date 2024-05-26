import { X } from 'lucide-react'
import React, {useState} from 'react'

export default function About() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [showss, setShowss] = useState(false);
  const handleshow = () => {
    setShow((show) => !show)
  }
  const handleshows = () => {
    setShows((shows) => !shows)
  }
  const handleshowss = () => {
    setShowss((showss) => !showss)
  }
  return (
    <>
    <div className="w-full py-5 h-auto items-center px-8 flex">
      <h1 className="text-4xl text-emerald-400 font-bold">hulu</h1>
    </div>
    <div  className="flex flex-col w-full h-full items-center justify-center mt-32">
      <h1 className="text-3xl mb-8 text-gray-900 font-bold">سوالات متداول</h1>
       <div onClick={handleshow} className="w-full border border-gray-900 cursor-pointer transition-all duration-300 max-w-xl justify-center rounded-lg px-4 py-4 items-center bg-white h-auto">
       <div className="flex justify-between w-full">
       <p className="text-gray-900 font-bold">hulu چیست؟</p>
       <X id='app' className="rotate-45"/>
       </div>
       {show && 
       <p className="mt-4 text-gray-400">asdadadadad</p>}
       </div>
       <div onClick={handleshows} className="w-full border border-gray-900 mt-4 max-w-xl cursor-pointer transition-all duration-300 justify-center rounded-lg px-4 py-4 items-center bg-white h-auto">
       <div className="flex justify-between w-full">
       <p className="text-gray-900 font-bold">آیا برای تماشای فیلم های آنلاین،باید اشتراک بخرم؟</p>
       <X id='app' className="rotate-45"/>
       </div>
       {shows && 
       <p className="mt-4 text-gray-400">asdadadadad</p>}
       </div>
       <div onClick={handleshowss} className="w-full border border-gray-900 mt-4 max-w-xl cursor-pointer transition-all duration-300 justify-center rounded-lg px-4 py-4 items-center bg-white h-auto">
       <div className="flex justify-between w-full">
       <p className="text-gray-900 font-bold">از کجا می توانم نرم افزار اندروید هولو را دانلود کنم؟</p>
       <X className="rotate-45"/>
       </div>
       {showss && 
       <p className="mt-4 text-gray-400">asdadadadad</p>}
       </div>
        </div>
        
    </>
  )
}
