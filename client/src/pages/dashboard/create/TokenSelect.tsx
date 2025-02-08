import { Input, Autocomplete, AutocompleteItem, Avatar, Button } from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import { cn } from "../../../shared/lib/tailwind";

interface Props {
    fields: Field[];
    tokenItems: TokenItem[];
    setFields: (fields: Field[]) => void;
    totalPercentage: number;
    setTotalPercentage: (totalPercentage: number) => void;
}

const TokenSelect = (props: Props) => {
    console.log({
        fields: props.fields,
        totalPercentageI: props.totalPercentage
    })

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {(props.totalPercentage !== 100) && (
                <p className="text-destructive w-full text-end text-xs">
                    Note: Total percentage must be 100%
                </p>
            )}
            {props.fields.map((field, index) => (
                <div key={index} className="flex flex-col md:flex-row w-full gap-6">
                    <div className="flex gap-3 w-full">
                        <Autocomplete
                            label="Select Asset"
                            variant="bordered"
                            inputProps={{
                                classNames: {
                                    inputWrapper: "border border-border/60 bg-grey-100",
                                    label: "z-0"
                                }
                            }}
                            labelPlacement="outside"
                            placeholder="Select Token"
                            startContent={<Icon name="Coins" className="w-5" />}
                            onInputChange={(value) => {
                                const field = props.fields.find((field) => field.id === index + 1);

                                if (field) {
                                    field.symbol = value;
                                    field.name = props.tokenItems.find((item) => item.symbol === value)?.name;
                                }

                                props.setFields([...props.fields]);
                            }}
                        >
                            {props.tokenItems.map((item, index) => (
                                <AutocompleteItem
                                    key={index}
                                    startContent={
                                        <Avatar alt={item.name} className="w-6 h-6" src={item.image} />
                                    }
                                >
                                    {item.symbol}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>

                        <button
                            type="button"
                            className={"md:hidden flex btn-icon bg-grey-100 border p-2 mt-[1.6rem]"}
                        >
                            <Icon name="X" className="w-6" />
                        </button>
                    </div>

                    <Input
                        label="Percentage"
                        name={`token_${field.symbol}`}
                        type="number"
                        variant="bordered"
                        placeholder="Enter Percentage"
                        labelPlacement="outside"
                        max={100}
                        min={1}
                        classNames={{
                            inputWrapper: "border border-border/60 bg-grey-100",
                            label: "z-0"
                        }}
                        onValueChange={(value) => {
                            const field = props.fields.find((field) => field.id === index + 1);
                            if (field) {
                                field.percentage = parseFloat(value);
                            }

                            props.setFields([...props.fields]);
                            props.setTotalPercentage(props.fields.reduce((acc, field) => acc + (field.percentage || 0), 0));
                        }}
                    />

                    <button
                        type="button"
                        className={"hidden md:flex btn-icon -ml-2 bg-grey-100 border p-2 mt-[1.6rem]"}
                    >
                        <Icon name="X" className="w-6" />
                    </button>
                </div>
            ))}

            <Button
                variant="bordered"
                size="md"
                isDisabled={props.totalPercentage >= 100}
                className={cn("flex items-center justify-center gap-2")}
                fullWidth
                onPress={() => {
                    props.setFields([...props.fields, {
                        id: props.fields.length + 1,
                        name: undefined,
                        symbol: undefined,
                        percentage: undefined
                    }]);
                }}
            >
                <Icon name="Plus" className="w-4" />
                <p>Add Token</p>
            </Button>
        </div>
    )
}

export default TokenSelect;