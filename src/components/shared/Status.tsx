import type { IconType } from "react-icons/lib";

type StatusProps = {
    text: string;
    icon: IconType;
    color: string;
}

const Status = ({ text, icon: Icon, color }: StatusProps) => {
    return (
        <div className={`${color} p-2 font-medium rounded flex items-center gap-1`}>
            {text} <Icon size={15} />
        </div>
    )
}

export default Status;
