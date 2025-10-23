import React from "react";
import './index.css';
export default function App()
{
    return(
        <div>
            <div className="absolute-0 left-0 h-full w-1/2 bg-black/60 flex justify-between items-center p-6 text-white"> 
              <nav className="flex flex-row gap-6">
                <ul className="flex flex-row gap-6">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                </ul>
               
              </nav>
            </div>
        </div>
    )
}