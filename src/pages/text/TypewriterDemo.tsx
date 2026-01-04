import { useRef } from "react";
import { IoIosRefresh } from "react-icons/io";
import BackButton from "../../components/buttons/BackButton";
import PropTable from "../../components/tables/PropTable";
import Typewriter from "../../components/text/Typewriter";
import { TypewriterProps } from "../../utils/data";
import type { TypewriterRef } from "../../utils/refs";

/**
 * Demos the Typewriter component. Examples based on MagicUI's Typing Animation component demo: https://magicui.design/docs/components/typing-animation.
 */
const TypewriterDemo = () => {
	// Base Usage
	const defaultTypewriterRef = useRef<TypewriterRef>(null);
	const defaultMultiTypewriterRef = useRef<TypewriterRef>(null);
	// Underscore Cursor
	const underscoreCursorRef = useRef<TypewriterRef>(null);
	// Looping Animation
	const loopSingleRef = useRef<TypewriterRef>(null);
	const loopMultiRef = useRef<TypewriterRef>(null);
	// Unblinking Cursor
	const unblinkingSingleRef = useRef<TypewriterRef>(null);
	const unblinkingMultiRef = useRef<TypewriterRef>(null);
	// No Cursor
	const noCursorRef = useRef<TypewriterRef>(null);
	// No Animate On Start
	const noAnimateOnStartRef = useRef<TypewriterRef>(null);
	// Typing / Animation Speed
	const typeSpeedRef = useRef<TypewriterRef>(null);
	return (
		<div className="min-h-screen p-4 md:p-6 manrope">
			<BackButton />
			<h1 className="text-center text-2xl sm:text-3xl font-bold">
				Typewriter Animation
			</h1>
			<h2 className="text-center text-sm sm:text-base">
				Have characters appear in a typed animation, resembling a typewriter.
			</h2>
			<div className="h-2 md:h-4" />
			<main className="flex justify-center">
				<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
					<DemoCard
						header="Basic Usage"
						onRefresh={() => {
							defaultTypewriterRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={defaultTypewriterRef}>Hello World</Typewriter>
						}
					/>
					<DemoCard
						header="Multiple Words"
						onRefresh={() => {
							defaultMultiTypewriterRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter
								ref={defaultMultiTypewriterRef}
								words={["Hello", "World", "Final Line :)"]}
							/>
						}
					/>
					<DemoCard
						header="No Cursor"
						onRefresh={() => {
							noCursorRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={noCursorRef} showCursor={false}>
								Hello World
							</Typewriter>
						}
					/>
					<DemoCard
						header="Underscore Cursor"
						onRefresh={() => {
							underscoreCursorRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={underscoreCursorRef} cursor="underscore">
								Hello World
							</Typewriter>
						}
					/>
					<DemoCard
						header="Unblinking Cursor"
						onRefresh={() => {
							unblinkingSingleRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={unblinkingSingleRef} blinkCursor={false}>
								Hello World
							</Typewriter>
						}
					/>
					<DemoCard
						header="Unblinking Cursor"
						onRefresh={() => {
							unblinkingMultiRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter
								ref={unblinkingMultiRef}
								blinkCursor={false}
								words={["Hello", "World", "Final Line :)"]}
							/>
						}
					/>
					<DemoCard
						header="Looping Animation"
						onRefresh={() => {
							loopSingleRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={loopSingleRef} blinkCursor={false} loop={true}>
								Hello World
							</Typewriter>
						}
					/>
					<DemoCard
						header="Looping Words"
						onRefresh={() => {
							loopMultiRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter
								ref={loopMultiRef}
								loop={true}
								words={["Hello", "World", "Final Line :)"]}
							/>
						}
					/>
					<DemoCard
						header="Manual Start"
						onRefresh={() => {
							noAnimateOnStartRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={noAnimateOnStartRef} loop={true} onStart={false}>
								Hello World
							</Typewriter>
						}
					/>
					<DemoCard
						header="Custom Speed"
						onRefresh={() => {
							typeSpeedRef?.current?.startTyping();
						}}
						typewriter={
							<Typewriter ref={typeSpeedRef} loop={true} delay={50}>
								Hello World
							</Typewriter>
						}
					/>
				</div>
			</main>
			<div className="h-4" />
			<div className="flex justify-center">
				<PropTable rows={TypewriterProps} />
			</div>
		</div>
	);
};

/**
 * Component for grouping Typewriter component configuration w/ appropriate refresh button
 */
interface Props {
	header: string;
	onRefresh: () => void;
	typewriter: React.ReactNode;
}
const DemoCard = ({ header, onRefresh, typewriter }: Props) => {
	return (
		<div>
			<h2 className="text-base lg:text-lg font-semibold">{header}</h2>
			<div className="relative flex justify-center item-center border-2 border-[#e6e6e6] rounded-xl px-3 py-5 md:p-6">
				<button
					type="button"
					className="absolute right-2 top-2 md:right-4 md:top-4"
					onClick={onRefresh}
				>
					<IoIosRefresh className="size-4 md:size-5" color="black" />
				</button>
				{typewriter}
			</div>
		</div>
	);
};

export default TypewriterDemo;
