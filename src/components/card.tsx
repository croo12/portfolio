import { CardComponentProps } from "@/utils/props";
import Link from "next/link";

const Card : React.FC<CardComponentProps> = ({url, title, content = null}) => {
    
    return (

        <Link href={url ? url : "#"} 
            className="group rounded-lg border border-transparent px-4 py-2 transition-colors 
            cursor-pointer m-4 text-white hover:text-black
            hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <h2 className={`my-1 text-xl font-semibold leading-none`}>
                {title }
            </h2>
            {content && 
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    {content}
                </p>
            }
        </Link>
    )
}

export default Card;