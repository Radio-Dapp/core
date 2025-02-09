import { Image } from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import TopNav from "../TopNav";
import { Sidebar } from "lucide-react";

export default function Profile() {
    return (
        <div className="relative min-h-screen w-full flex bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    <div className="relative w-full mx-auto max-w-2xl flex bg-grey-100 shadow-sm justify-between border h-[41rem] rounded-xl">
                        <div className="w-full h-[12rem] relative">
                            <img src="/images/banner.webp" className="w-full h-full object-cover rounded-t-xl" />

                            <div className="absolute mt-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <Image className="rounded-full p-1 bg-grey-200" src="/images/user.png" width={150} />
                            </div>

                            <div className="flex pt-[4.2rem] flex-col items-center justify-center w-full">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="gap-2 flex items-center justify-center">
                                        <h2 className="text-2xl  font-bold ">Kartikay Tiwari</h2>
                                        <Icon name="Check" className="text-white p-1 rounded-full bg-primary-600" />
                                    </div>

                                    <p className="text-muted">@ishtails</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}