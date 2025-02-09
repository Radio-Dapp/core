import mongoose, { Schema, Document } from 'mongoose';

interface IAsset {
    id: number;
    symbol: string;
    percentage: number;
}

interface IFunds extends Document {
    name: string;
    type: string;
    description: string;
    minimum_investment: string;
    maximum_investment: string;
    assets: IAsset[];
    createdAt: Date;
}

const AssetSchema: Schema = new Schema({
    id: { type: Number, required: true },
    symbol: { type: String, required: true },
    percentage: { type: Number, required: true }
});

const FundsSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    minimum_investment: { type: String, required: true },
    maximum_investment: { type: String, required: true },
    creator: { type: String, required: true },
    assets: { type: [AssetSchema], required: true },
}, { timestamps: true });

const Funds = mongoose.model<IFunds>('Funds', FundsSchema);

export default Funds;