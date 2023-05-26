import { LayoutProps } from "@/utils/props";

const MainLayout : React.FC<LayoutProps> = ({children}) => {

    return (
        <main className="flex max-w-4xl mx-auto w-3/4 flex-col px-12 pt-8 pb-24 overflow-y-auto">
            {children}
        </main>
    )
}

export default MainLayout;