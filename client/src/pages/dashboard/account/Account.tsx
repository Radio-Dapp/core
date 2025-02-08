import { Card, CardHeader, Chip } from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import Link from "../../../shared/components/Link";

type Props = {}

export default function Account({ }: Props) {
    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex p-8 flex-col">
                    <h1 className="flex gap-x-2 text-grey-500">
                        <Icon name="ChartCandlestick" weight="light" />  Your funds
                    </h1>

                    <div className="mt-8 flex-wrap flex gap-6">
                        <Link className="w-[32%]" to={`/dashboard/explore/1`} >
                    
                            <Card className="bg-grey-100 cursor-pointer border border-border/60 hover:border-border transition-all ">
                                <CardHeader>
                                    <div className="flex items-center justify-between w-full px-2 py-2">
                                        <Chip color="warning" className="text-tiny px-2" variant="flat">Fund Type</Chip>

                                        <p className="text-grey-600">$15000</p>
                                    </div>
                                </CardHeader>

                                <div className="flex flex-col bg-grey-200 px-6 rounded-xl mx-1 mb-1 py-5 justify-between hover:bg-grey-250 transition-all">
                                    <div>
                                        <p className="text-grey-600">Name</p>
                                        <small className="text-grey-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi assumenda sequi tenetur provident veritati ansjdsdewj effadfdfef...</small>
                                    </div>

                                    <div className="text-grey-600 flex w-full justify-between mt-6">
                                        <small>Current holder: 200</small>
                                        <small>Created At: 12/1/2025</small>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}