import BackButton from "../../components/buttons/BackButton";
import RippleButton from "../../components/buttons/RippleButton";
import PropTable from "../../components/tables/PropTable";
import { RippleButtonProps } from "../../utils/data";

const RippleButtonDemo = () => {
	const demoFunction = () => {};
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">
					Ripple Button
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					Button that creates a ripple effect when you press it
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Base Usage"
							child={
								<RippleButton onClick={demoFunction}>Click Me</RippleButton>
							}
						/>
						<DemoCard
							header="Ripple Color"
							child={
								<RippleButton rippleColor="#00ff00" onClick={demoFunction}>
									Click Me
								</RippleButton>
							}
						/>
						<DemoCard
							header="Ripple Duration"
							child={
								<RippleButton duration={1000} onClick={demoFunction}>
									Click Me
								</RippleButton>
							}
						/>
						<DemoCard
							header="Custom Styling"
							child={
								<RippleButton
									onClick={demoFunction}
									className="mono-space bg-black text-white text-2xl"
								>
									Click Me
								</RippleButton>
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={RippleButtonProps} />
				</div>
			</div>
		</div>
	);
};

interface Props {
	header: string;
	child: React.ReactNode;
}
const DemoCard = ({ header, child }: Props) => {
	return (
		<div className="h-full">
			<h2 className="text-base lg:text-lg font-semibold">{header}</h2>
			<div className="relative flex justify-center item-center border-2 border-[#e6e6e6] rounded-xl px-3 py-5 md:p-6">
				{child}
			</div>
		</div>
	);
};

export default RippleButtonDemo;
