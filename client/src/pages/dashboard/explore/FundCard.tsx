import { Card, CardHeader, Chip } from "@heroui/react"
import { truncateString } from "../../../shared/lib/utils"

type Props = {
    item: {
        id: number
        name: string
        tag: string
        description: string
        image: string
    }
}

function FundCard(props: Props) {
    return (
        <Card className="bg-grey-100 cursor-pointer border border-border/60 hover:border-border transition-all" key={props.item.id}>
            <CardHeader>
                <div className="flex items-center justify-between w-full px-2 py-2">
                    <Chip color="warning" className="text-tiny px-2" variant="flat">{props.item.tag}</Chip>

                    <p className="text-grey-600">$15000</p>
                </div>
            </CardHeader>

            <div className="flex flex-col bg-grey-200 px-6 rounded-xl mx-1 mb-1 h-36 py-5 justify-between hover:bg-grey-250 transition-all">
                <div>
                    <p className="text-grey-600">{props.item.name}</p>
                    <small className="text-grey-800">{truncateString(props.item.description, 50)}</small>
                </div>

                <div className="text-grey-600 flex w-full justify-between mt-6">
                    <small>Min Investment: $500</small>
                    <small>Max Investment: $5000</small>
                </div>
            </div>
        </Card>
    )
}

export default FundCard