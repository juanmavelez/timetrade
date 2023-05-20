import {getBearer} from "../getBearer";
import {localStorageService} from "../../services/localStorageService";
import {LOGOUT_ENDPOINT} from "../../constants/endpoints";

export const requestLogout = async () => {
    try {
        const response = await fetch(LOGOUT_ENDPOINT, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${getBearer()}`,
            }
        });
        if (response.ok) {
            localStorageService.clear();
            return true;
        }
        return false;
    }catch (error) {
        console.error(error);
        return false;
    }
};
