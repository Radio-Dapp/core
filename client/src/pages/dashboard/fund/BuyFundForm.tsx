import { Form, Input, Button } from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import useSignWithPrivy from "../../../shared/hooks/useSignWithPrivy";
import { axiosClient } from "../../../config";

function BuyFundForm() {
    const { activeWallet, signWithPrivy, ready } = useSignWithPrivy();

    async function approveUSDC() {
        if(!ready || !activeWallet) {
            console.log("Wallet not ready");
            return;
        }

        const res = await axiosClient.post("/funds/approve", {
            amount: 1000000,
            spender: activeWallet?.address,
        })

        return res.data;
    }

    async function handleBuy(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // const response = await approveUSDC();
        // console.log(response);

        // return;
        const data = Object.fromEntries(new FormData(e.currentTarget));

        if(!ready) {
            console.log("Wallet not ready");
            return;
        };

        const signature = await signWithPrivy(JSON.stringify(data));
        console.log({signature, id: props.item.id});
    }

    // const { item } = props
    return (
        <Form
            className="flex flex-col w-full gap-4 mt-4"
            validationBehavior="native"
            onSubmit={handleBuy}
        >
            <div className="flex items-center w-full gap-2 mt-4 text-muted">
                <Icon name="ShoppingBasket" className="w-5" />
                <p className="">
                    Buy Fund
                </p>
            </div>

            <div className="w-full p-6 border flex flex-col gap-4 bg-grey-0 border-border/80 rounded-sm">
                <Input
                    isRequired
                    label="Amount"
                    name="amount"
                    type="number"
                    min={0}
                    max={9999999999}
                    variant="bordered"
                    placeholder="Enter amound in FUSD"
                    labelPlacement="outside"
                    classNames={{
                        inputWrapper: "h-[3rem] border rounded-sm border-border/60 bg-grey-100",
                        label: "pb-2 z-0"
                    }}
                />

                <Button
                    variant="flat"
                    color="primary"
                    type="submit"
                    className="rounded-sm font-semibold"
                >
                    Buy
                </Button>
            </div>

        </Form>
    )
}

export default BuyFundForm