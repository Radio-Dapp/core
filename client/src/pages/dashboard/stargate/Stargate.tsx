import Sidebar from "../Sidebar";
import TopNav from "../TopNav";

export default function Stargate() {
    return (
        <div className="flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="relative w-full">
                <TopNav />

                <div className="sm:ml-[6.5rem] gap-6 grid grid-cols-12 grid-rows-2 px-8 mt-8">
                    <div className="w-full h-[600px] col-span-12 sm:col-span-7 border">
                        <iframe
                            src="https://stargate.finance/"
                            className="w-full h-full col-span-12 sm:col-span-7 border"
                            title="Stargate Bridge"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
