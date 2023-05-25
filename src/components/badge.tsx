import { BadgeProps } from "@/utils/props";
import Image from "next/image";

const Badge : React.FC<BadgeProps> = ({iconSrc, title, value}) => {

    return (
        <div className="flex flex-grow-1 p-2 w-1/3">
            <div className="w-[36px] m-2">
                <Image src={iconSrc} alt="맨" width={36} height={36} />
            </div>
            <div className="flex flex-col">
                <h2 className="p-2 font-bold text-center text-lg">{title}</h2>
                <span className="pl-2 text-xs text-left">{value}</span>
            </div>
        </div>
    )
}

export default Badge;