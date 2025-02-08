import { Button, Form, Input, Textarea } from "@heroui/react";

type Props = {}

function SendMessage({ }: Props) {
    return (
        <Form
            className="flex flex-col w-full gap-4"
            validationBehavior="native"
        >
            <div className="w-full p-6 border flex flex-col gap-4 bg-grey-50 border-border/80 rounded-sm">
                <div>
                    <h2 className="text-lg font-semibold">Reach out to us</h2>
                    <p className="text-grey-500 text-sm">Facing an issue? Send us a message..</p>
                </div>

                <Input
                    isRequired
                    name="name"
                    type="text"
                    variant="bordered"
                    placeholder="Name"
                    labelPlacement="outside"
                    classNames={{
                        inputWrapper: "h-[3rem] rounded-sm border border-border/60 bg-grey-100",
                        label: "pb-2 z-0"
                    }}
                />

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

                <Textarea
                    name="description"
                    labelPlacement="outside"
                    placeholder="Message"
                    variant="bordered"
                    classNames={{
                        inputWrapper: "border rounded-sm border-border/60 bg-grey-100",
                        label: "pb-2 z-0"
                    }}
                />

                <Button className="bg-grey-200 text-grey-800 border rounded-sm font-semibold" variant="solid">Send</Button>
            </div>
        </Form>
    )
}

export default SendMessage