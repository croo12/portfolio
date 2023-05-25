import Sentence from "../sentence";

const Footer = () => {
    return (
    <footer className="fixed left-0 bottom-0 flex w-full justify-end border-b border-gray-300 pr-8 pb-1 pt-1  dark:from-inherit lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
        <Sentence content="Made by" bold="croo12" />
    </footer>
    )
}

export default Footer;