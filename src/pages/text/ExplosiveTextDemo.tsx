import BackButton from "../../components/buttons/BackButton";
import PropTable from "../../components/tables/PropTable";
import ExplosiveText from "../../components/text/ExplosiveText";
import { ExplosiveTextProps, ManualExplosion } from "../../utils/data";

/**
 * Explosive Text Demo Showcase
 */
const ExplosiveTextDemo = () => {
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">
					Scatter / Explosive Text
				</h1>
				<h2 className="text-center text-sm sm:text-base">
					When hovering over text, scatter or "explode" the text in various
					rotations and translations.
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Base Usage"
							child={<ExplosiveText>HELLO WORLD</ExplosiveText>}
						/>
						<DemoCard
							header="Always Random"
							child={<ExplosiveText alwaysRandom>HELLO WORLD</ExplosiveText>}
						/>
						<DemoCard
							header="Not Random"
							child={
								<ExplosiveText transforms={ManualExplosion}>
									HIWORLD
								</ExplosiveText>
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={ExplosiveTextProps} />
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

export default ExplosiveTextDemo;
