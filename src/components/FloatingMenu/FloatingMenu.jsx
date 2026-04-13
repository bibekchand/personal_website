import "./FloatingMenu.css";
import { useState } from "react";
export default function NavBar() {
    const [isButtonClicked, toggleButton] = useState(false);
    const toggleButtonFunction = () => {
        toggleButton(!isButtonClicked);
    };
    return (
        <>
            <button
                type="button"
                onClick={toggleButtonFunction}
                className="text-blue-500 font-[Bungee] z-10 pl-4 pr-4 pt-2 pb-2 cursor-pointer border-3 border-red-400  rounded-4xl h-fit w-fit menuButton"
            >
                Menu
            </button>
            <div
                className="text-4xl flex justify-center items-center fixed w-screen truncate z-9 top-0 left-0 floatingMenu"
                style={{
                    height: isButtonClicked ? "100vh" : "0",
                }}
            >
                <ul className="font-[Bungee] cursor-pointer flex flex-col h-full justify-center gap-5 text-center">
                    <div>
                        <li>Home</li>
                        <hr />
                    </div>
                    <div>
                        <li> About</li>
                        <hr />
                    </div>
                    <div>
                        <li><a href="#ContactPage">Contact</a></li>
                        <hr />
                    </div>
                </ul>
            </div>
        </>
    );
}
