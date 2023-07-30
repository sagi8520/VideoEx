import { MediaType } from "express";
import { IUser } from "../user/user.interface";

export interface IMedia {
    _id?: string;
    name: string;
    date: Date;
    description: string;
    user?: IUser | string;
    mediaType: MediaType;
    // media?: Media;
}