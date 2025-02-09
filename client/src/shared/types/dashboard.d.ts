import { Address } from "viem";

interface Field {
    id: number;
    name?: string;
    symbol: string | undefined;
    percentage: number | undefined;
}

interface TokenItem {
    name: string,
    symbol: string,
    image: string
}
interface IAsset {
    id: number;
    symbol: string;
    percentage: number;
}

interface IFunds extends Document {
    name: string;
    type: string;
    image?: string;
    symbol: string;
    address: Address;
    description: string;
    minimum_investment: string;
    maximum_investment: string;
    assets: IAsset[];
    createdAt: Date;
}