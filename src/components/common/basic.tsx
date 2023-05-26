import { LayoutProps } from "@/utils/props";
import Header from "./header"
import MainLayout from "./main"
import Footer from "./footer";

const BasicPageLayout : React.FC<LayoutProps> = ({children}) => {

    return (
        <div className='min-h-screen overflow-x-visible'>
            <Header />
            <MainLayout>
                {children}
            </MainLayout>
            <Footer />
        </div>
    )
}

export default BasicPageLayout;