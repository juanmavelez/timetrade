import {useRouter} from "next/router";
import {LOGIN_PAGE} from "../constants/urls";
import {getBearer} from "./getBearer";

export const useAuthUser = () => {
    const router = useRouter();
    const bearerToken = getBearer();

    if(bearerToken === undefined || bearerToken === null){
        router.push(LOGIN_PAGE);
    }
}
