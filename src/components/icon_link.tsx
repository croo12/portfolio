import { IconWithLinkProps } from "@/utils/props";
import Image from "next/image";

const IconWithLink : React.FC<IconWithLinkProps> = ({linkUrl, iconSrc, alt = "nothing", width = 32, height = 32}) => {
    return (
        <a
            className={`${linkUrl ? "lg:pointer-events-auto" : "pointer-events-none"} bg-gradient-to-b m-2 flex place-items-center gap-2 p-8  lg:p-0`}
            href={linkUrl ? linkUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className='rounded-xl bg-white p-2'>
                <Image
                    src={iconSrc}
                    alt={alt}
                    className=""
                    width={width}
                    height={height}
                    priority
                />
            </div>
        </a>
    )
}

export default IconWithLink;