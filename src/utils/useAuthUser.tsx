import {useRouter} from "next/router";
import {LOGIN_PAGE} from "../constants/urls";
import {isAuthenticated} from "./isAuthenticated";

export const useAuthUser = () => {
    const router = useRouter();
    if(isAuthenticated()){
        if(typeof window !== 'undefined'){
            void router.push(LOGIN_PAGE);
        }
    }
}
