import dotenv from 'dotenv';

dotenv.config();
type IConfig = {
    port: number,
    mongoURI: string,
    secretKey: string,
    tokenExpiration: string,
}

export const config: IConfig = {
    port: Number(process.env.PORT) || 3000,
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mydb",
    secretKey: process.env.SECRET_KEY || "1234",
    tokenExpiration: '99999999999999999s'
}