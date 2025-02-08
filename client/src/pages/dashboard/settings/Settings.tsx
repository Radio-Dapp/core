import Sidebar from "../Sidebar"
import TopNav from "../TopNav";

type Props = {}

export default function Settings({ }: Props) {
    return (
        <div className="relative min-h-screen w-full flex bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    
                </div>
            </div>
        </div>
    )
}