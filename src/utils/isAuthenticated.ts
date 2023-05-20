import {getBearer} from "./getBearer";
import {isJWTTokenExpired} from "./JWT/isJWTExpired";

export const isAuthenticated = () => {
    const bearerToken = getBearer();
    return bearerToken !== undefined && bearerToken !== null && !isJWTTokenExpired(bearerToken)
}
