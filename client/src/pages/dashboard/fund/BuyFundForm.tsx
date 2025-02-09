import {
    Form, Input, Button,
    useDisclosure
} from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import useSignWithPrivy from "../../../shared/hooks/useSignWithPrivy";
import ApprovalModal from "../../../shared/components/ApprovalModal";
import { generateRandomHash } from "../../../shared/lib/utils";

interface Props {
    item: {
        id: number,
        name: string,
        tag: string,
        minimumInvestment: number,
        maximumInvestment: number,
        description: string,
        image: string,
    }
}

function BuyFundForm() {
    const { signWithPrivy, ready } = useSignWithPrivy();
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    let approvalStatus = true;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!ready) {
            console.log("Wallet not ready");
            return;
        };

        // check approval status
        if (!approvalStatus) {
            onOpenChange();
            return;
        }

        const data = Object.fromEntries(new FormData(e.currentTarget));
        const signature = await signWithPrivy(generateRandomHash(32));
        console.log(signature);

        console.log(data);
        return;
    }

    return (
        <div>
            <ApprovalModal onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />

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
                        variant="solid"
                        type="submit"
                        className="rounded-sm font-semibold bg-primary-700"
                    >
                        Buy
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default BuyFundForm