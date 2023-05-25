import { SentenceProps } from "@/utils/props";

const Sentence : React.FC<SentenceProps> = ({title, code}) => {
    return (
        <p className="fixed left-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-t from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {title}&nbsp;
          <code className="font-mono font-bold">{code}</code>
        </p>
    )
}

export default Sentence;