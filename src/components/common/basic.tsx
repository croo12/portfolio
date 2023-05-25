import { LayoutProps } from "@/utils/props";
import Header from "./header"
import MainLayout from "./main"

const BasicPageLayout : React.FC<LayoutProps> = ({children}) => {

    return (
        <div className='min-h-screen '>
            <Header />
            <MainLayout>
                {children}
            </MainLayout>
        </div>
    )
}

export default BasicPageLayout;