import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import Icon from "../../../shared/components/Icon";
import { Button } from "@heroui/react";
import SendMessage from "./SendMessage";
import Newsletter from "./Newsletter";


export default function Support(){
    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="w-full flex flex-col">
                <TopNav />

                {/* // Main content */}
                <div className="relative md:w-full max-w-2xl self-center text-grey-800 sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    <h2 className="text-3xl font-semibold">Contact</h2>
                    <p className="text-grey-500">If you have any questions or need help, please contact us below.. </p>

                    <div className="mt-2 flex gap-4">
                        <Button className="bg-grey-200 border font-semibold rounded-sm text-grey-800" variant="solid">Schedule free call</Button>

                        <Button className="bg-grey-50 border font-semibold rounded-sm text-grey-800" variant="solid">
                            <Icon name="Copy" className="w-4 text-grey-500" />
                            <p>E-mail</p>
                        </Button>
                    </div>

                    <div className="flex flex-col gap-8 mt-6">
                        <SendMessage />
                        <Newsletter />
                    </div>
                </div>
            </div>
        </div>
    )
}