import {useRouter} from "next/router";
import {ERROR_PAGE} from "../constants/urls";

export const useErrorRedirection = () => {
    const router = useRouter();

    return (error: unknown) => {
        if (error !== undefined || error !== null) {
            if(typeof window !== "undefined"){
                void router.push(ERROR_PAGE);
            }
            console.error(error);
        }
    };
}
