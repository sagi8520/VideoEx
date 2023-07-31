import { IUser } from "./user.interface";
import { UserModel } from "./user.model";


export default class UserRepository {
    static async validateUserCredit(userName: string, password: string): Promise<boolean> {
        return (await UserModel.count({ userName, password }).exec()) !== 0;
    }
    static getByToken(accessToken: string): Promise<IUser | null> {
        return UserModel.findOne({ accessToken }).exec();
    }
    static getById(_id: string): Promise<IUser | null> {
        return UserModel.findById({ _id }).exec();
    }
    static addUser(user: IUser): Promise<IUser | null> {
        return UserModel.create(user);
    }
    static async updateUser(queryFilters: Partial<IUser>, user: Partial<IUser>): Promise<IUser | null> {
        return UserModel.findOneAndUpdate({ ...queryFilters }, { ...user });
    }
    static async deleteUser(userIdToDelete: string): Promise<IUser | null> {
        return UserModel.findOneAndDelete({ _id: userIdToDelete });
    }


    static async isUserExists(_id: string): Promise<boolean> {
        return (await UserModel.count({ _id }).exec()) !== 0;
    }
    static async isUsernameExists(userName: string): Promise<boolean> {
        return (await UserModel.count({ userName }).exec()) !== 0;
    }
    static async isEmailExists(email: string): Promise<boolean> {
        return (await UserModel.count({ email }).exec()) !== 0;
    }

}