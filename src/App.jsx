import NavBar from "./components/FloatingMenu/FloatingMenu.jsx";
export default function App() {
    return (
        <>
            <nav className="flex justify-between pl-20 pt-5 pr-20">
                <div className="rounded-full overflow-clip">
                    <img
                        src="https://preview.redd.it/give-me-your-best-anime-profile-pictures-v0-ao0ke2r604wf1.jpg?width=447&format=pjpg&auto=webp&s=11411497bc415fef5a005bf95274cd57dd7e6abe"
                        alt=""
                        width={60}
                    />
                </div>
                <NavBar />
            </nav>
            <div className="grid grid-cols-2 mt-20 pl-20">
                <div>
                    <span className="text-6xl font-bold font-[Bungee]">Bibek Chand</span>
                    <br />
                    <span className="text-blue-500 text-6xl font-[Bungee]">Developer</span>
                    <div className="mt-4 font-[Saira_Stencil]">
                        Hi, I am Bibek, I am a developer and a <br /> tech enthusiast.
                        <br />
                        <button
                            type="button"
                            className=" font-[Bungee] mt-5 text-blue-500 z-10 pl-4 pr-4 pt-2 pb-2 cursor-pointer border-3 border-red-400  rounded-4xl h-fit w-fit menuButton"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className=" justify-self-center">
                    <img
                        src="https://preview.redd.it/give-me-your-best-anime-profile-pictures-v0-ao0ke2r604wf1.jpg?width=447&format=pjpg&auto=webp&s=11411497bc415fef5a005bf95274cd57dd7e6abe"
                        alt=""
                        width={200}
                    />
                </div>
            </div>

            <ul className="flex h-20 justify-center mt-10 gap-4">
                <li>
                    <img
                        src="https://www.vectorlogo.zone/logos/android/android-ar21.svg"
                        alt=""
                    />
                </li>
                <li>
                    {" "}
                    <img
                        src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg"
                        alt=""
                    />
                </li>
                <li>
                    <img
                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                        alt=""
                    />
                </li>
                <li>
                    <img
                        src="https://www.vectorlogo.zone/logos/python/python-ar21.svg"
                        alt=""
                    />
                </li>
                <li>
                    <img
                        src="https://www.vectorlogo.zone/logos/swift/swift-ar21.svg"
                        alt=""
                    />
                </li>
            </ul>
            <div>
                <div className="ContactPage grid grid-cols-2 h-fit p-4 m-10 rounded-2xl">
                    <ul className="underline font-light flex flex-col gap-5">
                        <li>
                            Email @<br />
                            <a href="mailto:bibekchand843@gmail.com">
                                <span className="pl-2">&rarr; bibekchand843@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            Github<br />
                            <a href="https://github.com/bibekchand">
                                <span className="pl-2">&rarr; github.com/bibekchand</span>
                            </a>
                        </li>
                    </ul>
                    <div className="justify-self-center">
                        <img
                            src="https://preview.redd.it/give-me-your-best-anime-profile-pictures-v0-ao0ke2r604wf1.jpg?width=447&format=pjpg&auto=webp&s=11411497bc415fef5a005bf95274cd57dd7e6abe"
                            alt=""
                            width={200}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
