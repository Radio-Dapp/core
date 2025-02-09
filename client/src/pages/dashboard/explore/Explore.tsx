import { Input } from "@heroui/react";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import Icon from "../../../shared/components/Icon";
import Link from "../../../shared/components/Link";
import ImageCard from "./ImageCard";
import useFetch from "../../../shared/hooks/useFetch";

export default function Explore() {
    const { data, loading } = useFetch<IFunds[]>("/api/get-funds");

    return (
        <div className="relative min-h-screen w-full flex bg-grey-50">
            <Sidebar />

            <div className="w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative sm:ml-[6.5rem] flex flex-col gap-2 p-8">
                    {/* // Search box */}
                    <Input
                        isClearable
                        classNames={{
                            inputWrapper: "border border-border/60 bg-grey-100",
                        }}
                        startContent={
                            <Icon name="Search" className="text-grey-400 w-5" />
                        }
                        fullWidth
                        variant="bordered"
                        placeholder="Search funds..."
                        radius="lg"
                        onChange={(e) => console.log(e.target.value)}
                    />

                    {/* // Cards */}
                    <section className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {data?.map((item) => (
                            <Link key={item.address} to={`/dashboard/explore/${item.address}`}>
                                {/* <FundCard item={item} /> */}
                                <ImageCard item={item} />
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
