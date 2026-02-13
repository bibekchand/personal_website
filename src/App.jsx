import NavBar from "./components/NavBar/NavBar.jsx";
import TextType from "./components/TextType/TextType.jsx";
export default function App() {
	return (
		<>
			<NavBar />
			<div className="h-full flex flex-col justify-center items-center text-3xl gap-5">
				Hi, I am Bibek 👋
				<TextType
					text={[
						"iOS Development",
						"Full Stack Web Development",
						"Android app development",
					]}
					typingSpeed={75}
					pauseDuration={1500}
					showCursor
					cursorCharacter="_"
					texts={[
						"Welcome to React Bits! Good to see you!",
						"Build some amazing experiences!",
					]}
					deletingSpeed={50}
					variableSpeedEnabled={false}
					variableSpeedMin={60}
					variableSpeedMax={120}
					cursorBlinkDuration={0.5}
				/>
			<button type="button" className="text-2xl border-amber-200 border-2 p-2 hover:bg-amber-200 duration-200 cursor-pointer hover:text-black">
				Contact Me --&gt;
			</button>
			</div>
		</>
	);
}
