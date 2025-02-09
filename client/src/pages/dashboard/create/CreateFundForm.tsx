import { Form, Input, Button, Textarea } from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import React, { useState } from "react";
import TokenSelect from "./TokenSelect";
import { axiosClient } from "../../../config";
import useSignWithPrivy from "../../../shared/hooks/useSignWithPrivy";


function CreateFundForm() {
    const [fields, setFields] = useState<Field[]>([{
        id: 1,
        name: undefined,
        symbol: undefined,
        percentage: undefined
    }]);
    const [totalPercentage, setTotalPercentage] = useState<number>(0);
    const { activeWallet } = useSignWithPrivy()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        const reqObj = {
            meta: {
                name: data.name,
                type: data.type,
                description: data.description,
                minimum_investment: data.minimum_investment,
                maximum_investment: data.maximum_investment,
                creator: activeWallet?.address
            },
            assets: fields
        }

        const res = await axiosClient.post("/api/create", reqObj)
        console.log(res.data)
    }

    return (
        <Form
            className="flex flex-col w-full gap-4 mt-2 "
            validationBehavior="native"
            onSubmit={handleSubmit}
        >
            {/* // Basic Details */}
            <section className="w-full">
                <div className="flex items-center w-full gap-2 my-4 text-muted">
                    <Icon name="SquareMousePointer" className="w-5" />
                    <p className="">
                        Basic Details
                    </p>
                </div>

                <div className="w-full p-6 border flex flex-col gap-4 bg-grey-0 border-border/80 rounded-xl">
                    <div className="grid w-full gap-6 md:grid-cols-2">
                        <Input
                            isRequired
                            label="Fund Name"
                            name="name"
                            type="text"
                            variant="bordered"
                            placeholder="Enter fund name"
                            labelPlacement="outside"
                            classNames={{
                                inputWrapper: "h-[3rem] border border-border/60 bg-grey-100 rounded-sm",
                                label: "pb-2 z-0"
                            }}
                        />

                        <Input
                            isRequired
                            label="Fund Type"
                            name="type"
                            type="text"
                            variant="bordered"
                            placeholder="Enter fund type"
                            labelPlacement="outside"
                            classNames={{
                                inputWrapper: "h-[3rem] border border-border/60 bg-grey-100 rounded-sm",
                                label: "pb-2 z-0"
                            }}
                        />

                    </div>

                    <Textarea
                        label="Description"
                        name="description"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        variant="bordered"
                        classNames={{
                            inputWrapper: "h-[3rem] border border-border/60 bg-grey-100 rounded-sm",
                            label: "pb-2 z-0"
                        }}
                    />
                </div>
            </section>

            {/* // Investment Details */}
            <section className="w-full">
                <div className="flex items-center w-full gap-2 my-4 text-muted">
                    <Icon name="ChartCandlestick" className="w-5" />
                    <p className="">
                        Investment Details
                    </p>
                </div>
                <div className="grid w-full gap-6 p-6 border md:grid-cols-2 bg-grey-0 border-border/80 rounded-xl">
                    <Input
                        label="Minimum Investment (USDC)"
                        name="minimum_investment"
                        type="number"
                        variant="bordered"
                        placeholder="Enter minimum investment"
                        labelPlacement="outside"
                        classNames={{
                            inputWrapper: "h-[3rem] border border-border/60 bg-grey-100 rounded-sm",
                            label: "pb-2 z-0"
                        }}
                    />

                    <Input
                        label="Maximum Investment (USDC)"
                        name="maximum_investment"
                        type="number"
                        variant="bordered"
                        placeholder="Enter maximum investment"
                        labelPlacement="outside"
                        classNames={{
                            inputWrapper: "h-[3rem] border border-border/60 bg-grey-100 rounded-sm",
                            label: "pb-2 z-0"
                        }}
                    />
                </div>
            </section>

            {/* // Token Details */}
            <section className="w-full">
                <div className="flex items-center w-full gap-2 my-4 text-muted">
                    <Icon name="Coins" className="w-5" />
                    <p className="">
                        Token Details
                    </p>
                </div>

                <div className="flex flex-col w-full gap-6 p-6 border bg-grey-0 border-border/80 rounded-xl">
                    <TokenSelect
                        fields={fields}
                        setFields={setFields}
                        tokenItems={tokenItems}
                        totalPercentage={totalPercentage}
                        setTotalPercentage={setTotalPercentage}
                    />
                </div>
            </section>

            {/* // Submit Button */}
            <div className="flex justify-end w-full gap-2">
                <Button
                    type="reset"
                    variant="flat">
                    Reset
                </Button>
                <Button
                    variant="bordered"
                    color="primary"
                    type="submit"
                    isDisabled={totalPercentage !== 100}
                >
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default CreateFundForm


const tokenItems: TokenItem[] = [
    {
        name: "Bitcon",
        symbol: "BTC",
        image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
    },
    {
        name: "Ethereum",
        symbol: "ETH",
        image: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
    },
    {
        name: "Tether",
        symbol: "USDT",
        image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=002"
    },
    {
        name: "Binance Coin",
        symbol: "BNB",
        image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
    },
    {
        name: "Cardano",
        symbol: "ADA",
        image: "https://cryptologos.cc/logos/cardano-ada-logo.png"
    }
]