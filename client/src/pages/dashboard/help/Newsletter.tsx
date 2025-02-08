import { Button, Form, Input } from "@heroui/react";

type Props = {}

function Newsletter({ }: Props) {
    return (
        <Form
            className="flex flex-col w-full gap-4"
            validationBehavior="native"
        >
            <div className="w-full p-6 border flex flex-col gap-4 bg-grey-50 border-border/80 rounded-sm">
                <div>
                    <h2 className="text-lg font-semibold">Join our newsletter</h2>
                    <p className="text-grey-500 text-sm">Sent out every week. No spam.</p>
                </div>

                <Input
                    isRequired
                    name="type"
                    type="text"
                    variant="bordered"
                    placeholder="Email"
                    labelPlacement="outside"
                    classNames={{
                        inputWrapper: "h-[3rem] rounded-sm border border-border/60 bg-grey-100",
                        label: "pb-2 z-0"
                    }}
                />

                <Button className="bg-grey-200 text-grey-800 border rounded-sm font-semibold" variant="solid">Subscribe</Button>
            </div>
        </Form>
    )
}

export default Newsletter