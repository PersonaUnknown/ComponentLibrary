interface Props {
	header: string;
	child: React.ReactNode;
}

/**
 * Component for displaying demo showcase content w/ noticeable border / bounds
 */
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

export default DemoCard;
