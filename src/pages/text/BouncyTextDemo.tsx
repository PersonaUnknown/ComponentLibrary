import BackButton from "../../components/buttons/BackButton";
import PropTable from "../../components/tables/PropTable";
import BouncyText from "../../components/text/BouncyText";
import { BouncyTextProps } from "../../utils/data";

/**
 * Explosive Text Demo Showcase
 */
const BouncyTextDemo = () => {
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">
					Bouncy Text
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					Text that has its characters bounce / move in interesting patterns
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Y Position"
							child={<BouncyText>HELLO WORLD</BouncyText>}
						/>
						<DemoCard
							header="Scale Animation"
							child={<BouncyText animType="scale">HELLO WORLD</BouncyText>}
						/>
						<DemoCard
							header="Move + Scale Animation"
							child={<BouncyText animType="move-scale">HELLO WORLD</BouncyText>}
						/>
						<DemoCard
							header="Custom Anim Speed"
							child={<BouncyText delay={0.05}>HELLO WORLD</BouncyText>}
						/>
						<DemoCard
							header="Custom Styling"
							child={
								<BouncyText className="bg-black text-white p-2">
									HELLO WORLD
								</BouncyText>
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={BouncyTextProps} />
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

export default BouncyTextDemo;
