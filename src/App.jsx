import Banner from "./assests/Banner.jpeg";
import NavBar from "./components/FloatingMenu/FloatingMenu.jsx";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
export default function App() {
    const ref = useRef(null);
    const secondRef = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInViewSecond = useInView(secondRef, { once: true });
    const mainControls = useAnimation();
    const mainControlsSecond = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
        if (isInViewSecond) {
            mainControlsSecond.start("visible");
        }
    }, [isInView, isInViewSecond, mainControls, mainControlsSecond]);
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
                    <motion.div
                        className="text-6xl font-bold font-[Bungee]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Bibek Chand
                    </motion.div>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
                        }}
                        className="text-blue-500 text-6xl font-[Bungee]"
                    >
                        Developer
                    </motion.span>
                    <motion.div
                        className="mt-4 font-[Saira_Stencil]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
                        }}
                    >
                        Hi, I am Bibek, I am a developer and a <br /> tech enthusiast.
                        <br />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                            transition={{ type: "spring", duration: 0.2, stiffness: 1000 }}
                            type="button"
                            className=" font-[Bungee] mt-5 text-blue-500 z-10 pl-4 pr-4 pt-2 pb-2 cursor-pointer border-3 border-red-400  rounded-4xl h-fit w-fit menuButton"
                        >
                            <a href="#ContactPage">Contact Me</a>
                        </motion.button>
                    </motion.div>
                </div>
                <motion.div
                    className=" justify-self-center"
                    initial={{ opacity: 0, scale: 0.95, y: 200 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        scale: { type: "spring", visualDuration: 0.1, bounce: 0.2 },
                    }}
                >
                    <img src={Banner} alt="" height={300} width={400} />
                </motion.div>
            </div>

            <div className="flex flex-col ml-auto mr-auto mt-30 text-white justify-center items-center  p-8 text-4xl font-[Bungee] h-fit w-fit bg-orange-400">
                Reviews
            </div>
            <motion.div
                className="flex mt-20 pl-20  items-start w-full flex-wrap overflow-visible"
                ref={secondRef}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControlsSecond}
                transition={{
                    duration: 0.6,
                    delay: 0.25,
                }}
            >
                <motion.div
                    drag
                    dragConstraints={{ left: -20 }}
                    className="text-5xl relative left-5 "
                >
                    👏
                </motion.div>
                <div className="  max-w-[20ch] p-10 dialogBox mr-20 rounded-full rounded-tl-2xl border-purple-400 border-2 menuButton">
                    "This is probably the best code we've written till date."
                </div>

                <motion.div
                    drag
                    dragConstraints={{ left: -20 }}
                    className="text-5xl relative left-5"
                >
                    🤩
                </motion.div>
                <div className="max-w-[30ch] p-10 dialogBox mr-20 rounded-full rounded-tl-2xl border-red-400 border-2 menuButton">
                    "Working with Bibek was so much easy. He communicates well and listens
                    to all of the requirements."
                </div>

                <motion.div
                    drag
                    dragConstraints={{ left: -20 }}
                    className="text-5xl relative left-5"
                >
                    😍
                </motion.div>
                <div className="  max-w-[30ch] p-10 dialogBox mr-20 rounded-full rounded-tl-2xl border-yellow-400 border-2 menuButton">
                    “Bibek did an excellent job on our project. He paid attention to
                    detail, communicated clearly throughout, and delivered high-quality
                    work within the deadline. Highly recommended.”
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.6,
                    delay: 0.25,
                }}
            >
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
                <motion.ul
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 0.6,
                        delay: 0.25,
                    }}
                    className="flex h-20 justify-center mt-5 gap-4 flex-wrap"
                >
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
                </motion.ul>
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
            </motion.div>
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
