import React, { useEffect, useState } from 'react'

export default function Searchbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ]
  function onWindowMatch(){
    if (
      localStorage.theme === 'dark' ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");  
    } else {
      element.classList.remove("dark");  
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break;
        default:
          localStorage.removeItem('theme');
          onWindowMatch();
          break;
    }
  }, [theme])
  darkQuery.addEventListener("change", (e) =>{
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }
  })
  return (
    <div className="w-full flex items-center px-36 mt-16 justify-between h-12">
    <div className="flex bg-white drop-shadow-lg w-80 h-12 rounded-xl">
      <input className="w-full h-full rounded-xl bg-white px-3 outline-none" placeholder='Search'/>
    </div>
    <div className="bg-white flex items-center w-32 px-1 rounded drop-shadow-lg text-slate-900 ">
    {
      options?.map(opt=>(
        <button key={opt.text} className={`w-8 h-8 leading-9 text-xl m-1 ${
          theme === opt.text && "text-sky-600"
        }`}
        onClick={() => setTheme(opt.text)}
        >
        <ion-icon name={opt.icon}></ion-icon>
        </button>
      ))
    }
    </div>
    </div>
  )
}
