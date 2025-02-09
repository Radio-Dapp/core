import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    address: string;
    name: string;
    type: 'user' | 'manager';
    usdcApproved: boolean;
    image: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    address: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['user', 'manager'], default: 'user' },
    usdcApproved: { type: Boolean, default: false },
    image: { type: String }
}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);

export default User;