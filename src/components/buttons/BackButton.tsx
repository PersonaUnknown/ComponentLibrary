import { IoCaretBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props {
	href?: string;
}

/**
 * Returns user back to home page / target destination
 */
const BackButton = ({ href = "/" }: Props) => {
	return (
		<Link
			to={{
				pathname: href,
			}}
			className="inline-flex flex-row shrink-0 items-center group hover:underline"
		>
			<IoCaretBackOutline
				size={20}
				color="black"
				className="group-hover:-translate-x-1 transition-transform duration-100"
			/>
			Back
		</Link>
	);
};

export default BackButton;
