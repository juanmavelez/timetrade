import {getBearer} from "./getBearer";
import {isJWTTokenExpired} from "./JWT/isJWTExpired";

export const isAuthenticated = () => {
    const bearerToken = getBearer();

    console.log(bearerToken !== undefined && bearerToken !== null && !isJWTTokenExpired(bearerToken))
    return bearerToken !== undefined && bearerToken !== null && !isJWTTokenExpired(bearerToken)
}
