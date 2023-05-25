import { IconWithLinkProps } from "@/utils/props";
import Image from "next/image";

const IconWithLink : React.FC<IconWithLinkProps> = ({linkUrl, iconSrc, alt = "nothing", width = 32, height = 32}) => {
    return (
        <a
            className="pointer-events-none bg-gradient-to-b mx-2 flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href={linkUrl}
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