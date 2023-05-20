import {useRouter} from "next/router";
import {LOGIN_PAGE} from "../constants/urls";
import {getBearer} from "./getBearer";
import {isJWTTokenExpired} from "./JWT/isJWTExpired";

export const useAuthUser = () => {
    const router = useRouter();
    const bearerToken = getBearer();

    if(bearerToken === undefined || bearerToken === null || isJWTTokenExpired(bearerToken)){
        if(typeof window !== 'undefined'){
            void router.push(LOGIN_PAGE);
        }
    }
}
