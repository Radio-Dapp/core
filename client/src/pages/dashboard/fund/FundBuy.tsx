import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import { truncateString } from "../../../shared/lib/utils";
import BuyFundForm from "./BuyFundForm";


const item = {
    id: 1,
    name: "BTC-ETH Risk Fund",
    tag: "Risk",
    minimumInvestment: 1000,
    maximumInvestment: 10000,
    description: "Bitcoin based fund with Ethereum exposure..",
    image: "https://framerusercontent.com/images/Hum9kNmaIhgXEnuF3kBhXbgEPg.png",
}

export default function FundBuy() {
    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="flex flex-col w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative md:w-full max-w-2xl xl:max-w-5xl self-center text-grey-800 sm:ml-[6.5rem] flex flex-col p-8">
                    <img src={item.image} className="rounded-sm max-h-[30vh] object-cover object-top" />

                    <h2 className="text-3xl font-semibold mt-4">Buy <span className="text-primary-500">{item.name}</span></h2>
                    <p className="text-grey-500">{truncateString(item.description, 300)}</p>


                    {/* // Fund Details */}
                    <section className="w-full mt-2">
                        <div className="flex justify-between gap-4 text-grey-500 text-sm mt-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Fund Id:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{item.id}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Fund Type:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{item.tag}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Minimum Investment:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{item.minimumInvestment}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Maximum Investment:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{item.maximumInvestment}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <BuyFundForm />
                </div>
            </div>
        </div>
    )
}