import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import { truncateString } from "../../../shared/lib/utils";
import BuyFundForm from "./BuyFundForm";
import { useParams } from "react-router";
import { IFunds } from "../../../shared/types/dashboard";
import useFetch from "../../../shared/hooks/useFetch";

export default function FundBuy() {
    const { fundId } = useParams();
    const { data } = useFetch<IFunds>(`/api/get-fund?address=${fundId}`);

    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="flex flex-col w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative md:w-full max-w-2xl xl:max-w-5xl self-center text-grey-800 sm:ml-[6.5rem] flex flex-col p-8">
                    <img src={data?.image} className="rounded-sm max-h-[30vh] object-cover object-top" />

                    <h2 className="text-3xl font-semibold mt-4">Buy <span className="text-primary-500">{data?.name}</span></h2>
                    <p className="text-grey-500">{truncateString(data?.description || "", 300)}</p>


                    {/* // Fund Details */}
                    <section className="w-full mt-2">
                        <div className="flex justify-between gap-4 text-grey-500 text-sm mt-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Fund Id:</p>
                                    <p className="hidden md:flex text-grey-600 border px-2 rounded-sm bg-grey-200">{truncateString(data?.address || "", 24)}</p>
                                    <p className="md:hidden text-grey-600 border px-2 rounded-sm bg-grey-200">{truncateString(data?.address || "", 12)}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Fund Type:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{data?.type}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Minimum Investment:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{data?.minimum_investment}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">Maximum Investment:</p>
                                    <p className="text-grey-600 border px-2 rounded-sm bg-grey-200">{data?.maximum_investment}</p>
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