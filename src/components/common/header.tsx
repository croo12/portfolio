import LinkCard from "../Link";
import IconWithLink from "../icon_link";
import { HeaderCardsData, HeaderIconsData } from "@/utils/static_data";

const Header = () => {
    return (
        <header className="background-effect pt-8" id="top">
            <div>

                <div className='flex justify-between pr-16'>
                    <div className="flex flex-col after:dark:opacity-40 ">
                        <h1 className={`font-sans font-bold text-left text-5xl p-4 text-white`}>
                            <span className="pr-2 cursor-effect">Portfolio</span>
                        </h1>
                        <h1 className={`font-["Black Han Sans"] text-left text-5xl p-4 text-white`}>이지우</h1>
                    </div>

                    <div className={'flex items-start'} id={"links"}>
                        {
                            HeaderIconsData.map((el, idx) => {
                                return (
                                    <IconWithLink {...el} key={idx} />
                                )
                            })
                        }
                    </div>
                </div>
                <hr className='mt-8'/>
            </div>


        <div className="mb-32 flex justify-center text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            {HeaderCardsData.map((el, idx) => {
                return (
                    <LinkCard {...el} key={idx} />
                )
            })}
        </div>
      </header>
    )
}

export default Header;