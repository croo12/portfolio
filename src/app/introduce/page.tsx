import Card from "@/components/card";
import IconWithLink from "@/components/icon_link";
import IntroduceBadges from "@/components/introduce/introduce_badges";
import Layout from "@/components/small_layout";
import { backIcons, deploymentIcons, frontIcons } from "@/utils/static_data";

type IntroducePageProps = {
    frontend : Array<React.JSX.Element>,
    backend : Array<React.JSX.Element>,
    deployment : Array<React.JSX.Element>,
}

const Introduce : React.FC<IntroducePageProps> = () => {

    const {frontend, backend, deployment} = getData().props;

    return (
        <>
            <Layout color="#ffc107">
                <h1 className="my-8 text-center text-3xl font-bold "> <span className="border-b">INTRODUCE</span> </h1>
                <IntroduceBadges />
            </Layout>
            <Layout color="#fd7e14">
                <h1 className="my-8 text-center text-3xl font-bold "> <span className="border-b">SKILLS</span> </h1>
                <div className="flex justify-evenly">
                    <Card title="Frontend" dark={true} content={frontend} />
                    <Card title="Backend" dark={true} content={backend} />
                    <Card title="Deployment" dark={true} content={deployment} />
                </div>
            </Layout>
        </>
    )
}

export const getData = () => {
    
    const backend = backIcons.map(el => {
        return <IconWithLink {...el} />
    });
    const frontend = frontIcons.map(el => {
        return <IconWithLink {...el} />
    });
    const deployment = deploymentIcons.map(el => {
        return <IconWithLink {...el} />
    }); 
    
    return {
        props: {
            backend,
            frontend,
            deployment
        }
    }
}

export default Introduce;