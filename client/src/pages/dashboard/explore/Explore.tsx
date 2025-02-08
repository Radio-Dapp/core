import { Input } from "@heroui/react";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import Icon from "../../../shared/components/Icon";
import Link from "../../../shared/components/Link";
import ImageCard from "./ImageCard";

type Props = {}

const fundItems = [
    {
        id: 1,
        name: "BTC-ETH Risk Fund",
        tag: "Risk",
        description: "Bitcoin based fund with Ethereum exposure..",
        image: "https://framerusercontent.com/images/Hum9kNmaIhgXEnuF3kBhXbgEPg.png",
    },
    {
        id: 2,
        name: "EVM Chain Fund",
        tag: "Hedge",
        description: "Ethereum Virtual Machine based fund..",
        image: "https://framerusercontent.com/images/sYwxVFlpwgzmT6YNHPrBLCpOuM.png",
    },
    {
        id: 3,
        name: "Solana Fund",
        tag: "Park",
        description: "Solana based fund with environmental focus..",
        image: "https://framerusercontent.com/images/gg0Ji8ukA1h9AVkG0nenecPgL7A.png",
    }
]

export default function Explore({ }: Props) {
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
                        {fundItems.map((item) => (
                            <Link key={item.id} to={`/dashboard/explore/${item.id}`}>
                                {/* <FundCard item={item} /> */}
                                <ImageCard item={item}/>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
