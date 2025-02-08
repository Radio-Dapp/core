import Sidebar from "../Sidebar";
import TopNav from "../TopNav";

import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export default function Home() {

    return (
        <div className="flex w-full min-h-screen bg-grey-50">

            <Sidebar />

            <div className="relative w-full">
                <TopNav />

                {/* // Main content */}
                {/* <section className="sm:ml-[6.5rem] flex flex-col gap-2 p-8">
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
                </section> */}

                
                <div className="ml-[6.5rem] gap-6 grid grid-cols-12 grid-rows-2 px-8 mt-8">
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                        <CardHeader className="absolute z-10 top-1 flex-col items-end">
                            <p className="text-tiny text-white/60 uppercase font-bold">EthOxford 2025</p>
                            <h4 className="text-white/90 font-medium text-xl">Defi Main track</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            className="z-0 w-full h-full object-cover"
                            style={{ opacity: 0.5 }}
                            src="https://cdn.dorahacks.io/static/files/194701954f6512ee921fd79437abbbca.png"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-6 h-8 object-contain"
                                    src="https://cdn.dorahacks.io/static/files/DoraHacks-logo_2W1B7iL.png"
                                />
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">Submitted on</p>
                                    <p className="text-tiny text-white/60">Dorahacks</p>
                                </div>
                            </div>
                            <Button radius="full" size="sm">
                                Check Buidl
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-white/60 font-medium text-lg">RadioFM - Assets and Fund manager</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://pinktiemiami.com/wp-content/uploads/2021/08/coming-soon5.png"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p className="text-black text-tiny">Available soon.</p>
                                <p className="text-black text-tiny">Get notified.</p>
                            </div>
                            <Button className="text-tiny" radius="full" size="sm">
                                Notify Me
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Dummy data</p>
                            <h4 className="text-white font-medium text-large">Some moret</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://heroui.com/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Sponser Bounty</p>
                            <h4 className="text-white font-medium text-large">Enshrined Data Protocols</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://blog.pintu.co.id/wp-content/uploads/2023/10/flare-1.jpg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Sponser Bounty</p>
                            <h4 className="text-white font-medium text-large">BNB Main Track</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://public.bnbstatic.com/image/cms/blog/20220215/56e2ce27-0276-408f-ad55-2fe85ad0cb68.png"
                        />
                    </Card>

                </div>

            </div>
        </div>
    );
}
