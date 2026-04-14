import Banner from "./assests/Banner.jpeg";
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
                    <span className="text-blue-500 text-6xl font-[Bungee]">
                        Developer
                    </span>
                    <div className="mt-4 font-[Saira_Stencil]">
                        Hi, I am Bibek, I am a developer and a <br /> tech enthusiast.
                        <br />
                        <button
                            type="button"
                            className=" font-[Bungee] mt-5 text-blue-500 z-10 pl-4 pr-4 pt-2 pb-2 cursor-pointer border-3 border-red-400  rounded-4xl h-fit w-fit menuButton"
                        >
                            <a href="#ContactPage">Contact Me</a>
                        </button>
                    </div>
                </div>
                <div className=" justify-self-center">
                    <img src={Banner} alt="" height={300} width={400} />
                </div>
            </div>
            <div className="flex mt-20 pl-20  items-start w-full flex-wrap overflow-visible">
                <div className="text-5xl relative left-5 ">👏</div>
                <div className=" max-w-[20ch] p-10 dialogBox mr-20 rounded-full rounded-tl-2xl border-purple-400 border-2">
                    "This is probably the best code we've written till date."
                </div>

                <div className="text-5xl relative left-5">🤩</div>
                <div className="max-w-[30ch] p-10 dialogBox mr-20 rounded-full rounded-tl-2xl border-red-400 border-2">
                    "Working with Bibek was so much easy. He communicates well and listens
                    to all of the requirements."
                </div>

                <div className="text-5xl relative left-5">😍</div>
                <div className="  max-w-[30ch] p-10 dialogBox mr-20 rounded-full rounded-tl-2xl border-yellow-400 border-2">
                    “Bibek did an excellent job on our project. He paid attention to
                    detail, communicated clearly throughout, and delivered high-quality
                    work within the deadline. Highly recommended.”
                </div>
            </div>
            <div>
                <div className="flex flex-col ml-auto mr-auto mt-20 text-white justify-center items-center  p-8 text-4xl font-[Bungee] h-fit w-fit bg-purple-400">
                    About Me
                </div>
                <div className="text-center font-[Saira_Stencil] max-w-[65ch] ml-auto mr-auto mt-10">
                    I have been working as a software developer for more than 6 months
                    now. I haved developed app for iOS, developed websites for various
                    companies and individuals and done other fun stuff.
                </div>
                <div className="text-center max-w-[65ch] ml-auto mr-auto font-[Bungee] mt-10">
                    Technologies I have worked with:
                </div>
                <ul className="flex h-20 justify-center mt-5 gap-4 flex-wrap">
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
                <div className="text-center">
                    I use{" "}
                    <a
                        href="https://github.com/bibekchand/my_dotfyles"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="text-blue-500 underline">NeoVim</span>
                    </a>{" "}
                    btw.😏
                </div>
            </div>
            <div className="mt-20">
                <div
                    id="ContactPage"
                    className="ContactPage grid grid-cols-2 h-fit p-4 m-10 rounded-2xl"
                >
                    <ul className="underline font-light flex flex-col gap-5">
                        <li>
                            Email @<br />
                            <a href="mailto:bibekchand843@gmail.com">
                                <span className="pl-2">&rarr; bibekchand843@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            Github
                            <br />
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
