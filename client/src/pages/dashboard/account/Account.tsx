import Sidebar from "../Sidebar"
import TopNav from "../TopNav";

export default function Account() {
    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex p-8 flex-col">
                </div>
            </div>
        </div>
    )
}