import BackButton from "../../components/buttons/BackButton";
import DemoCard from "../../components/cards/DemoCard";
import PropTable from "../../components/tables/PropTable";
import Tooltip from "../../components/text/Tooltip";
import { TooltipProps } from "../../utils/data";

/**
 * Demo Showcase of Tooltip Component using placeholder content
 */
const TooltipDemo = () => {
	const PlaceholderContent = () => {
		return (
			<div className="bg-black p-4 text-xl rounded-lg text-white">
				Hello World
			</div>
		);
	};
	return (
		<div>
			<div className="min-h-screen p-4 md:p-6 manrope">
				<BackButton />
				<h1 className="text-center text-2xl sm:text-3xl font-bold">Tooltip</h1>
				<h2 className="text-center text-sm sm:text-base">
					Component that displays content when hovering over the main component
				</h2>
				<div className="h-2 md:h-4" />
				<main className="flex justify-center">
					<div className="w-full md:w-3xl lg:w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
						<DemoCard
							header="Top"
							child={
								<Tooltip 
									trigger={
										<div className="mx-auto bg-[#505081] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl text-center">
											Hover Over Me
										</div>
									}
									content={<PlaceholderContent />}
								/>
							}
						/>
						<DemoCard
							header="Left"
							child={
								<Tooltip 
									trigger={
										<div className="mx-auto bg-[#505081] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl text-center">
											Hover Over Me
										</div>
									}
									content={<PlaceholderContent />}
									position="left"
								/>
							}
						/>
						<DemoCard
							header="Right"
							child={
								<Tooltip 
									trigger={
										<div className="mx-auto bg-[#505081] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl text-center">
											Hover Over Me
										</div>
									}
									content={<PlaceholderContent />}
									position="right"
								/>
							}
						/>
						<DemoCard
							header="Bottom"
							child={
								<Tooltip 
									trigger={
										<div className="mx-auto bg-[#505081] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl text-center">
											Hover Over Me
										</div>
									}
									content={<PlaceholderContent />}
									position="bottom"
								/>
							}
						/>
						<DemoCard
							header="Custom Duration"
							child={
								<Tooltip 
									trigger={
										<div className="mx-auto bg-[#505081] text-white text-base md:text-xl cursor-pointer p-2 rounded-xl text-center">
											Hover Over Me
										</div>
									}
									content={<PlaceholderContent />}
									delay={50}
								/>
							}
						/>
					</div>
				</main>
				<div className="h-2 md:h-4" />
				<div className="flex justify-center">
					<PropTable rows={TooltipProps} />
				</div>
			</div>
		</div>
	);
};

export default TooltipDemo;
