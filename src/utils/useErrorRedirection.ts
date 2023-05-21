import {useRouter} from "next/router";
import {ERROR_PAGE} from "../constants/urls";

export const useErrorRedirection = () => {
    const router = useRouter();

    return (error: unknown) => {
        if (error !== undefined || error !== null) {
            console.error(error);
            void router.push(ERROR_PAGE);
        }
    };
}
