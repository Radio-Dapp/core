import { Form, Input, Button, Textarea } from "@heroui/react";
import Icon from "../../../shared/components/Icon";

interface Props {
    item: {
        id: number;
        name: string;
        tag: string;
        minimumInvestment: number;
        maximumInvestment: number;
        description: string;
        image: string;
    }
}

function BuyFundForm(props: Props) {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        console.log({ data });
    }

    return (
        <Form
            className="flex flex-col w-full gap-4 mt-4"
            validationBehavior="native"
            onSubmit={handleSubmit}
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
                    name="name"
                    type="text"
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