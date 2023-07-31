import mongoose from 'mongoose';
import { IUser } from './user.interface';

const UserSchema: mongoose.Schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    accessToken: {
        type: String,
        required: true,
    }
});

export const UserModel = mongoose.model<IUser & mongoose.Document>('users', UserSchema)