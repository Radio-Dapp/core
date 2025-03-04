import { Button } from "@heroui/react";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";

type Props = {}

export default function Settings({ }: Props) {
    return (
        <div className="relative min-h-screen w-full flex bg-grey-50">
            <Sidebar />

            <div className="w-full flex flex-col">
                <TopNav />

                {/* // Main content */}
                <div className="relative md:w-full max-w-2xl self-center text-grey-800 sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    <h2 className="text-3xl font-semibold">Settings</h2>
                    <p className="text-grey-500">Set up your application below..</p>

                    <div className="border p-6 mt-4 rounded-md flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">Become Manager</h2>
                        <p className="text-grey-500">Become a fund manager and start creating investment funds that others can invest in! Just like traditional stock fund managers, you'll earn management fees and performance-based rewards when people buy into your fund. This is your chance to build your own investment strategy, attract investors, and generate income as your fund grows. Take control, manage your own portfolio, and start earning like a professional fund manager today!</p>

                        {/* Become Manager */}
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <Button radius="sm" variant="bordered" className="w-full bg-grey-100 self-end flex mt-2 border-border border-1" >Register</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}