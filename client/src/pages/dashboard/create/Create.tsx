import DescriptionAlert from "../Description";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import CreateFundForm from "./CreateFundForm";


export default function Create() {
    return (
        <div className="relative min-h-screen w-full flex bg-grey-50">
            <Sidebar />

            <div className="w-full flex flex-col">
                <TopNav />

                {/* // Main content */}
                <div className="relative md:w-full max-w-2xl xl:max-w-5xl  self-center sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    <DescriptionAlert
                        title="Create a new fund by providing the fund name and type."
                    />

                    <CreateFundForm />
                </div>
            </div>
        </div>
    )
}