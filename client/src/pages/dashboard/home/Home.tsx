import useFetch from "../../../shared/hooks/useFetch";
import Sidebar from "../Sidebar";
import TopNav from "../TopNav";
import Feeds from "../../../../data/feeds.json" with {type: "json"};
import InnerLoader from "../../../shared/components/InnerLoader";

export default function Home() {
    const { data, loading } = useFetch<FeedResult>(`flare/get-feeds`);

    return (
        <div className="flex w-full min-h-screen bg-grey-50">
            {loading && <InnerLoader />}

            <Sidebar />

            <div className="relative w-full">
                <TopNav />

                {/* // Main content */}
                <section className="sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {data?.feeds.map((feedValue, index) => {
                            const feedDetails = Feeds[index];

                            return (
                                <div key={index} className="flex flex-col gap-1 p-3 text-sm border rounded-lg bg-grey-100 text-hover">
                                    <p className="text-primary">{feedDetails.Name}</p>
                                    <p>Price: ${(feedValue / 10 ** data.decimals[index]).toFixed(6)}</p>
                                    <p>Base Asset: {feedDetails.Details["Base Asset"]}</p>
                                    <p>Risk: {feedDetails.Risk}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
