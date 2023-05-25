import Badge from "@/components/badge";
import Card from "@/components/card";
import IconWithLink from "@/components/icon_link";
import Layout from "@/components/small_layout";
import { backIcons, deploymentIcons, frontIcons, introduceData } from "@/utils/static_data";

const Introduce = () => {

    return (
        <>
            <Layout color="#ffc107">
                <h1 className="my-8 text-center text-3xl font-bold "> <span className="border-b">INTRODUCE</span> </h1>
                <div className="bg-white justify-between py-8 rounded-xl">
                    <div className="flex justify-evenly mb-8">
                        {introduceData[0].map(el => <Badge {...el} />)}
                    </div>
                    <div className="flex justify-evenly">
                        {introduceData[1].map(el => <Badge {...el} />)}
                    </div>
                </div>
            </Layout>
            <Layout color="#fd7e14">
                <h1 className="my-8 text-center text-3xl font-bold "> <span className="border-b">SKILLS</span> </h1>
                <div className="flex justify-evenly">
                    <Card title="Frontend" dark={true} content={frontIcons.map(el => {
                        return <IconWithLink {...el} />
                    })} />
                    <Card title="Backend" dark={true} content={backIcons.map(el => {
                        return <IconWithLink {...el} />
                    })} />
                    <Card title="Deployment" dark={true} content={deploymentIcons.map(el => {
                        return <IconWithLink {...el} />
                    })} />
                </div>
            </Layout>
        </>
    )
}

export default Introduce;