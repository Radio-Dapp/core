import { Card, CardHeader, Chip } from "@heroui/react";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import Link from "../../../shared/components/Link";
import { truncateString } from "../../../shared/lib/utils";

type Props = {}

export default function Account({ }: Props) {
    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex p-8 flex-col">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <Link className="w-full" to={`/dashboard/explore/1`} >
                            <Card className="transition-all border cursor-pointer bg-grey-100 border-border/60 hover:border-border ">
                                <CardHeader>
                                    <div className="flex items-center justify-between w-full px-2 py-2">
                                        <Chip color="warning" className="px-2 text-tiny" variant="flat">Fund Type</Chip>

                                        <p className="text-grey-600">$15000</p>
                                    </div>
                                </CardHeader>

                                <div className="flex flex-col justify-between px-6 py-5 mx-1 mb-1 transition-all bg-grey-200 rounded-xl hover:bg-grey-250">
                                    <div>
                                        <p className="text-grey-600">Name</p>
                                        <small className="text-grey-800">{truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi assumenda sequi tenetur provident veritati ansjdsdewj effadfdfef...", 100)}</small>
                                    </div>

                                    <div className="flex justify-between w-full mt-6 text-grey-600">
                                        <small>Current holder: 200</small>
                                        <small>Created At: 12/1/2025</small>
                                    </div>
                                </div>
                            </Card>
                        </Link>

                        <Link className="w-full" to={`/dashboard/explore/1`} >
                            <Card className="transition-all border cursor-pointer bg-grey-100 border-border/60 hover:border-border ">
                                <CardHeader>
                                    <div className="flex items-center justify-between w-full px-2 py-2">
                                        <Chip color="warning" className="px-2 text-tiny" variant="flat">Fund Type</Chip>

                                        <p className="text-grey-600">$15000</p>
                                    </div>
                                </CardHeader>

                                <div className="flex flex-col justify-between px-6 py-5 mx-1 mb-1 transition-all bg-grey-200 rounded-xl hover:bg-grey-250">
                                    <div>
                                        <p className="text-grey-600">Name</p>
                                        <small className="text-grey-800">{truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi assumenda sequi tenetur provident veritati ansjdsdewj effadfdfef...", 100)}</small>
                                    </div>

                                    <div className="flex justify-between w-full mt-6 text-grey-600">
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