import { introduceData } from "@/utils/static_data"
import Badge from "../badge"

const IntroduceBadges = () => {
    return (
        <div className="bg-white justify-between py-8 rounded-xl">
            <div className="flex justify-evenly mb-8">
                {introduceData[0].map(el => <Badge {...el} />)}
            </div>
            <div className="flex justify-evenly">
                {introduceData[1].map(el => <Badge {...el} />)}
            </div>
        </div>
    )
}

export default IntroduceBadges;