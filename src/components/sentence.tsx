import { SentenceProps } from "@/utils/props";

const Sentence : React.FC<SentenceProps> = ({ content, bold }) => {
  return (
    <p className="w-full justify-center text-sm border-b border-gray-300 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static w-auto  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
      {content}&nbsp;
      <code className="font-sans font-bold">{bold}</code>
    </p>
  );
}

export default Sentence;