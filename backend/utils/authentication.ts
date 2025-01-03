import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

type UserData = {
    [key: string]: string | number | undefined;
};

export const getPasswordHash = async (password: string) => {
    try {
        const hash: string = await bcrypt.hash(password, 12);
        return hash
    }catch (err) {
        console.log(err);
    }

}

export const verifyPassword = (plainPassword: string, hashedPassword: string) :boolean => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
}

export const createAccessToken = (userData: UserData, expire?: number, refresh: boolean = false): string => {
    const expirationTime = expire
    ? new Date(Date.now() + expire * 1000)
    : new Date(Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRE_MINUTES) * 60 * 1000);

    
    const payload = {
        user: userData,
        jti: uuidv4(),
        exp: Math.floor(expirationTime.getTime() / 1000), // Convert to seconds since epoch
        refresh: refresh,
      };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    algorithm: process.env.JWT_ALGORITHM as jwt.Algorithm,
    });

    return token;

}