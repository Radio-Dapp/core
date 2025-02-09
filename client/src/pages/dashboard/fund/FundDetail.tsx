import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Sidebar from "../Sidebar"
import TopNav from "../TopNav";
import Icon from "../../../shared/components/Icon";
import { truncateString } from "../../../shared/lib/utils";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Link from "../../../shared/components/Link";
import HoldersDetails from "./HoldersDetails";
import useFetch from "../../../shared/hooks/useFetch";
import { useParams } from "react-router";
import { IFunds } from "../../../shared/types/dashboard";
import InnerLoader from "../../../shared/components/InnerLoader";

// const renderChart = {
//     title: "Fund 1",
//     categories: ["Search", "Direct", "Social", "Referral"],
//     color: "primary",
//     chartData: [
//         { name: "Search", value: 400 },
//         { name: "Direct", value: 300 },
//         { name: "Social", value: 300 },
//         { name: "Referral", value: 200 },
//     ],
// }

export default function FundDetail() {
    const { fundId } = useParams();
    const { data, loading } = useFetch<IFunds>(`/api/get-fund?address=${fundId}`);

    return (
        <div className="relative flex w-full min-h-screen bg-grey-50">
            <Sidebar />

            <div className="flex flex-col w-full">
                <TopNav />

                {/* // Main content */}
                <div className="relative md:w-full max-w-2xl xl:max-w-5xl self-center text-grey-800 sm:ml-[6.5rem] flex flex-col p-8">
                    {loading && <InnerLoader />}

                    <img src={data?.image} className="rounded-sm max-h-[30vh] object-cover object-top" />

                    <h2 className="text-3xl font-semibold mt-6 text-primary-500">{data?.name}</h2>
                    <p className="text-grey-500">{truncateString(data?.description || "", 300)}</p>

                    <div className="flex gap-4 mt-4">
                        <Link to={`/dashboard/funds/buy/${data?.address}`} className="flex items-center gap-2 text-grey-500">
                            <Button className="font-semibold border rounded-sm bg-grey-200 text-grey-800" variant="solid">
                                Buy Fund
                            </Button>
                        </Link>

                        <Button className="font-semibold border rounded-sm bg-grey-50 text-grey-800" variant="solid">
                            <Icon name="CircleArrowOutUpRight" className="w-4 text-grey-500" />
                            <p>View Analytics</p>
                        </Button>
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row">
                        <Card className="flex-row justify-between w-full p-4 mt-6 border rounded-sm bg-grey-100 border-border/70">
                            <div className="w-full">
                                <CardHeader className="flex-col items-start" title="Fund Details">
                                    <h2 className="font-bold">Asset Distribution</h2>
                                    <p className="text-sm text-grey-500">Here's a breakdown of the asset allocation..</p>
                                </CardHeader>
                                <CardBody className="flex flex-col gap-4">
                                    {data?.assets.map((asset, index) => (
                                        <div className="flex items-center w-full gap-3 bg-grey-200 p-2 rounded-sm" key={index}>
                                            <Icon name="Coins" className="w-10 h-10 p-2 rounded-sm text-grey-600 bg-grey-300" />

                                            <div className="text-sm">
                                                <h3 className="font-semibold uppercase">{asset.symbol}</h3>
                                                <p className="text-grey-500">{asset.percentage}%
                                                </p>
                                            </div>
                                        </div>
                                    ))}


                                    {/* <ResponsiveContainer
                                        className="[&_.recharts-surface]:outline-none"
                                        width="100%"
                                    >
                                        <PieChart accessibilityLayer margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <Tooltip
                                                content={({ label, payload }) => (
                                                    <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-medium bg-background px-1 text-tiny shadow-small">
                                                        <span className="font-medium text-foreground">{label}</span>
                                                        {payload?.map((p, index) => {
                                                            const name = p.name;
                                                            const value = p.value;
                                                            const category = renderChart.categories.find((c) => c.toLowerCase() === name) ?? name;

                                                            return (
                                                                <div key={`${index}-${name}`} className="flex w-full items-center gap-x-2">
                                                                    <div
                                                                        className="h-2 w-2 flex-none rounded-full"
                                                                        style={{
                                                                            backgroundColor: `hsl(var(--heroui-${renderChart.color}-${(index + 1) * 200}))`,
                                                                        }}
                                                                    />
                                                                    <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-grey-700">
                                                                        <span className="text-grey-500">{category}</span>
                                                                        <span className="font-mono font-medium text-grey-700">
                                                                            {value}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                                cursor={false}
                                            />

                                            <Pie
                                                animationDuration={1000}
                                                animationEasing="ease"
                                                data={renderChart.chartData}
                                                dataKey="value"
                                                innerRadius="68%"
                                                nameKey="name"
                                                paddingAngle={-20}
                                                strokeWidth={0}
                                            >
                                                {renderChart.chartData.map((_, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={`hsl(var(--heroui-${renderChart.color}-${(index + 1) * 200}))`}
                                                    />
                                                ))}
                                            </Pie>

                                        </PieChart>
                                    </ResponsiveContainer> */}
                                </CardBody>
                                <CardFooter>
                                    <Button variant="flat" className="w-full font-semibold border rounded-sm" >View All</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    <HoldersDetails />
                </div>
            </div>
        </div>
    )
}

{/* <div className="flex flex-col mt-2 gap-6 md:flex-row">
                        <Card className="flex-row justify-between w-full p-4 mt-6 border rounded-sm bg-grey-100 border-border/70">
                            <div className="w-full flex">
                                <div className="flex flex-col justify-center md:gap-2 gap-4 p-2 text-tiny text-grey-500">
                                    {renderChart.categories.map((category, index) => (
                                        <div key={index} className="flex items-center gap-4 md:gap-2">
                                            <span
                                                className="h-3 w-3 rounded-full"
                                                style={{
                                                    backgroundColor: `hsl(var(--heroui-${renderChart.color}-${(index + 1) * 200}))`,
                                                }}
                                            />
                                            <span className="capitalize hidden md:flex">{category}</span>
                                        </div>
                                    ))}
                                </div>

                                <ResponsiveContainer
                                    className="[&_.recharts-surface]:outline-none"
                                    height={200}
                                    width="100%"
                                >
                                    <PieChart accessibilityLayer margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <Tooltip
                                            content={({ label, payload }) => (
                                                <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-medium bg-background px-1 text-tiny shadow-small">
                                                    <span className="font-medium text-foreground">{label}</span>
                                                    {payload?.map((p, index) => {
                                                        const name = p.name;
                                                        const value = p.value;
                                                        const category = renderChart.categories.find((c) => c.toLowerCase() === name) ?? name;

                                                        return (
                                                            <div key={`${index}-${name}`} className="flex w-full items-center gap-x-2">
                                                                <div
                                                                    className="h-2 w-2 flex-none rounded-full"
                                                                    style={{
                                                                        backgroundColor: `hsl(var(--heroui-${renderChart.color}-${(index + 1) * 200}))`,
                                                                    }}
                                                                />
                                                                <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-grey-700">
                                                                    <span className="text-grey-500">{category}</span>
                                                                    <span className="font-mono font-medium text-grey-700">
                                                                        {value}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                            cursor={false}
                                        />

                                        <Pie
                                            animationDuration={1000}
                                            animationEasing="ease"
                                            data={renderChart.chartData}
                                            dataKey="value"
                                            innerRadius="68%"
                                            nameKey="name"
                                            paddingAngle={-20}
                                            strokeWidth={0}
                                        >
                                            {renderChart.chartData.map((_, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={`hsl(var(--heroui-${renderChart.color}-${(index + 1) * 200}))`}
                                                />
                                            ))}
                                        </Pie>

                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="w-full">
                                <CardHeader className="" title="Fund Details">
                                    <div className="p-2 rounded-full btn-icon bg-grey-300">
                                        <Icon name="Coins" className="w-8 h-8 text-primary-600" />
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <h2 className="font-bold">Token Distribution</h2>
                                    <p className="text-sm text-grey-500">Here's a breakdown of the token allocation..</p>
                                </CardBody>
                                <CardFooter>
                                    <Button variant="flat" className="font-semibold border rounded-sm" >View Details</Button>
                                </CardFooter>
                            </div>


                        </Card>
                    </div> */}