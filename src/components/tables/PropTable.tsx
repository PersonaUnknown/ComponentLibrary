import type { PropTableRow } from "../../utils/types";

interface Props {
	rows: PropTableRow[];
}

/**
 *
 */
const PropTable = ({ rows }: Props) => {
	const headers = ["Prop", "Type", "Default", "Description"];
	return (
		<div className="overflow-x-auto border-2 border-[#e5e5e5] overflow-hidden rounded-lg manrope md:w-3xl lg:w-5xl">
			<table>
				<thead>
					<tr className="text-left bg-[#f5f5f5] border-b-2 border-[#e5e5e5]">
						{headers.map((header) => {
							return (
								<th className="px-4 py-3" key={header}>
									{header}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => {
						const { prop, type, description } = row;
						return (
							<tr
								key={prop}
								className="text-left border-b-2 border-[#e5e5e5] last:border-b-0"
							>
								<td className="px-4 py-3 geist-mono min-w-20 md:min-w-32 lg:min-w-56">
									{prop}
								</td>
								<td className="px-4 py-3 geist-mono min-w-20 md:min-w-32 lg:min-w-56">
									{type}
								</td>
								<td className="px-4 py-3 geist-mono min-w-20 md:min-w-32 lg:min-w-56">
									{row.default}
								</td>
								<td className="px-4 py-3 min-w-20 md:min-w-32 lg:min-w-56">
									{description}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default PropTable;
