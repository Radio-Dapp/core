import { Button, Chip, Image } from "@heroui/react"
import { trucateString } from "../../../shared/lib/utils";

type Props = {
    item: {
        id: number;
        name: string;
        tag: string;
        description: string;
        image: string;
    }
}

function ImageCard({ item }: Props) {
    return (
        <div className="flex flex-col border rounded-sm bg-grey-100 border-border/50 hover:border-border">
            <div className="overflow-hidden rounded-t-sm">
                <img
                    src={item.image}
                    alt="Hero card"
                    className="object-cover transition-transform duration-300 rounded-t-sm hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-4 p-4">
                <div className="">
                    <h4 className="text-sm font-semibold">{item.name}</h4>
                    <p className="text-small text-grey-500">{trucateString(item.description, 50)}</p>
                </div>

                <div className="flex flex-col gap-2 text-tiny text-grey-500">
                    <span className="flex justify-between">
                        <p>Min Investment: $500</p>
                        <p>Max Investment: $5000</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ImageCard