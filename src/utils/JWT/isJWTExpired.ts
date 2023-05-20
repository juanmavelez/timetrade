import {decodeJWT} from "./decodeJWT";

export const isJWTTokenExpired = (token: string): boolean => {
    const decodedToken = decodeJWT(token);

    if(decodedToken === undefined || decodedToken === ""){
        return true
    }

    const expirationTime: number = decodedToken.exp;

    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime >= expirationTime;
};
