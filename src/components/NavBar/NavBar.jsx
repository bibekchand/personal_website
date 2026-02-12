import "./NavBar.css";
import {useState} from "react"
export default function NavBar() {
    const [isButtonClicked, toggleButton] = useState(false)
    const toggleButtonFunction = ()=>{
        toggleButton(!isButtonClicked)
    }
	return (
        <>
        <button type="button" onClick={toggleButtonFunction} className="fixed text-blue-950 z-10 right-0 p-10 cursor-pointer">Menu</button>
		<nav className="bg-black text-white text-4xl flex justify-center items-center fixed w-full" style={{ height: isButtonClicked ? "100%" : "0"}}>
			<ul className="cursor-pointer flex flex-col h-full justify-center gap-5 text-center">
				<div>
					<li>Home</li>
					<hr />
				</div>
				<div>
					<li>About</li>
					<hr />
				</div>
				<div>
					<li>Contact</li>
					<hr />
				</div>
			</ul>
		</nav>
        </>
	);
}
