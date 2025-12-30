import { Link } from "react-router-dom";
import type { ComponentCardData } from "../../utils/types";
interface Props {
    data: ComponentCardData
}

/**
 * Card Container used for home page to display links to re-direct to specific UI Components
 */
const ComponentCard = ({
    data,
}: Props) => {
    const {
        href,
        label,
        description,
    } = data;
    return (
        <div className="border-2 border-[#e6e6e6] rounded-xl p-6 h-full">
            <Link 
                to={{
                    pathname: href
                }}
                className="text-xl font-medium text-[#005ea2] hover:text-[#006bb8] hover:underline"
            >
                {label}
            </Link>
            <p className="pt-2">
                {description}
            </p>
        </div>
    );
}

export default ComponentCard;