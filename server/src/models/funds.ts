import mongoose, { Schema, Document } from 'mongoose';

interface IFunds extends Document {
    name: string;
    type: string;
    description: string;
    assets: number;
    createdAt: Date;
}

const FundsSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    assets: { type: [], required: true },
}, { timestamps: true });

const Funds = mongoose.model<IFunds>('Funds', FundsSchema);

export default Funds;