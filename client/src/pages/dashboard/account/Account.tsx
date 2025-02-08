import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import MetricCard from "./MetricCard";

type Props = {}

export default function Account({ }: Props) {
    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    <MetricCard />
                </div>
            </div>
        </div>
    )
}