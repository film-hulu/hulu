import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar"
import Bodyfilm from "./components/bodyfilm";
import { useEffect, useRef, useState } from "react";
function App() {
 const name = useRef();
 const password = useRef();
 const [showHome, setShowHome] = useState(false);
  const localSignUp = localStorage.getItem("SignUp")
 useEffect(() => {
   if(localSignUp) {
    setShowHome(true)
   }
 })
 const handleClick = () => {
  if (name.current.value && password.current.value) {
   localStorage.setItem("name",name.current.value);
   localStorage.setItem("password",password.current.value);
   localStorage.setItem("SignUp",name.current.value);
   setShowHome(true)
  }
 }
  return (
<>
{showHome ?
  <main className="flex">
         <Sidebar></Sidebar>
         <div className="flex-col w-full">
         <Searchbar></Searchbar>
         <Bodyfilm></Bodyfilm>
         </div>
    </main> :
<div className="flex flex-col justify-center items-center w-full h-full mt-28">
<h1 className="text-gray-900 mb-4 font-bold text-3xl">SignUp</h1>
<div className="w-96 h-80 bg-white justify-center items-center flex flex-col drop-shadow-lg rounded px-4">
<input maxLength={5} type="text" ref={name} placeholder="User Name" className="bg-white drop-shadow-lg w-full outline-none px-3 h-12 border-gray-900 border-2 rounded-lg" />
<input maxLength={5} type="password" ref={password} placeholder="Password" className="bg-white drop-shadow-lg w-full outline-none mt-8 px-3 h-12 border-gray-900 border-2 rounded-lg" />
<button className="w-full bg-emerald-400 hover:bg-white hover:border-emerald-400 hover:border-2 transition-all duration-300 text-gray-900 font-bold rounded mt-8 h-12" onClick={handleClick}>SignUp</button>
</div>
</div>}
</>
);
}

export default App;
