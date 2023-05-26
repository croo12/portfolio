import { CardComponentProps } from "@/utils/props";
import Link from "next/link";

const LinkCard : React.FC<CardComponentProps> = ({url = undefined, title, dark = false}) => {
    
    return (

        <Link 
            href={url ? url : "/#"}
            className={`group rounded-lg border border-transparent px-4 py-2 transition-colors 
            ${ url ? "cursor-pointer" : "cursor-auto pointer-events-none"} m-4
            ${ dark ? "hover:text-white hover:bg-slate-900" : "text-white hover:text-black hover:bg-gray-100"} 
            hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
        >
            <h2 className={`my-1 text-xl font-semibold leading-none`}>
                {title}
            </h2>
        </Link>
    )
}

export default LinkCard;