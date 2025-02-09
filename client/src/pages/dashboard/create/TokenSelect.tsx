import { Input, Autocomplete, AutocompleteItem, Avatar, Button } from "@heroui/react";
import Icon from "../../../shared/components/Icon";
import { cn } from "../../../shared/lib/tailwind";
import useFetch from "../../../shared/hooks/useFetch";

interface Props {
    fields: Field[];
    tokenItems: TokenItem[];
    setFields: (fields: Field[]) => void;
    totalPercentage: number;
    setTotalPercentage: (totalPercentage: number) => void;
}

interface tokenData {
    baseAsset: string;
    current_price: number;
    change_24hr: string;
    logo_url: string;
}

const TokenSelect = (props: Props) => {
    const { data, loading } = useFetch<tokenData[]>("http://localhost:9090/data/get-assets")

    console.log(data);

    if (loading) {
        return <p className="text-muted">Loading...</p>
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {(props.totalPercentage !== 100) && (
                <p className="w-full text-xs text-destructive text-end">
                    Note: Total percentage must be 100%
                </p>
            )}
            {props.fields.map((field, index) => (
                <div key={index} className="flex flex-col w-full gap-6 md:flex-row">
                    <div className="flex w-full gap-3">
                        <Autocomplete
                            label="Select Asset"
                            variant="bordered"
                            inputProps={{
                                classNames: {
                                    inputWrapper: "border border-border/60 bg-grey-100 rounded-sm",
                                    label: "z-0"
                                }
                            }}
                            labelPlacement="outside"
                            placeholder="Select Token"
                            onInputChange={(value) => {
                                const field = props.fields.find((field) => field.id === index + 1);

                                if (field) {
                                    field.symbol = value;
                                    field.name = props.tokenItems.find((item) => item.symbol === value)?.name;
                                }

                                props.setFields([...props.fields]);
                            }}
                        >
                            {data && data?.map((item, index) => (
                                <AutocompleteItem
                                    key={index}
                                    startContent={
                                        <Avatar alt={item.baseAsset} className="object-cover w-6 h-6" src={item.logo_url} />
                                    }
                                    className="uppercase"
                                    endContent={
                                        <p className={item.change_24hr.includes("-") ? "text-destructive" : "text-primary-500"}>
                                            {item.change_24hr}
                                        </p>
                                    }
                                >
                                    {item.baseAsset}
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
                            inputWrapper: "border border-border/60 bg-grey-100 rounded-sm",
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