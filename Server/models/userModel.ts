import mongo from 'mongoose';


const UserSchema: mongo.Schema = new mongo.Schema({

});

export const UserModel = mongo.model<User & mongo.Document>('users', UserSchema)