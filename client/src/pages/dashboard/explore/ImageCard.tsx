import { truncateString } from "../../../shared/lib/utils";
import { IFunds } from "../../../shared/types/dashboard";

type Props = {
    item: IFunds;
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

            <div className="flex flex-col justify-between gap-4 p-4">
                <div className="">
                    <h4 className="text-sm font-semibold">{item.name}</h4>
                    <p className="text-small text-grey-500">{truncateString(item.description, 32)}</p>
                </div>

                <div className="flex flex-col gap-2 text-tiny text-grey-500">
                    <span className="flex justify-between gap-2">
                        <p>Min Investment: ${item.minimum_investment}</p>
                        <p>Max Investment: ${item.maximum_investment}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ImageCard