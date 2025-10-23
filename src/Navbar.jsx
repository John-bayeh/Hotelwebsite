import React from "react";
export default function App()
{
    return(
        <div>
            <nav className="w-full bg-gray-900 bg-opacity-70 top-0 left-0 z-20 shadow">
             <div className="max-w-7xl flex justify-between items-center py-3 px-6 ">
                  <span className="font-bold text-yellow-700 tracking-wider">GLORY</span>
                   <ul className="flex gap-6">
                     <li className="text-gray-200 hover:text-yellow-400 transition cursor-pointer">Home</li>
                     <li className="text-gray-200 hover:text-yellow-400 transition cursor-pointer">Package</li>
                     <li className="text-gray-200 hover:text-yellow-400 transition cursor-pointer">Aboutus</li>
                     <li className="text-gray-200 hover:text-yellow-400 transition cursor-pointer">Contact</li>
                   </ul>
             </div>
            </nav>
        </div>
    )
}