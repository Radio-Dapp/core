import { Button } from "@heroui/react";
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
                    <h1>Become a Manager</h1>
                    <p className="bg-grey-200 text-sm text-grey-650 p-3 rounded-md">Become a fund manager for just <span className="text-primary">$10</span> and start creating investment funds that others can invest in! Just like traditional stock fund managers, you'll earn management fees and performance-based rewards when people buy into your fund. This is your chance to build your own investment strategy, attract investors, and generate income as your fund grows. Take control, manage your own portfolio, and start earning like a professional fund manager today!</p>
                    <Button radius="full" variant="faded" className="w-max self-end mt-2 bg-primary text-grey-0 border-none" >Register</Button>
                </div>
            </div>
        </div>
    )
}