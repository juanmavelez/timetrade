import {REQUEST_TASK_ENDPOINT} from "../../constants/endpoints";
import {getBearer} from "../getBearer";

/*
 We return only boolean because we don't care about the result, in case the request succed we will
 redirect the user to the profile page
 */
export const requestTask = async (serviceId: string): Promise<boolean> => {
    try {
        const response = await fetch(REQUEST_TASK_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getBearer()}`,
            },
            body: JSON.stringify({
                task: {
                    service_id: serviceId,
                    time: "1",
                }
            })
        })
        return response.ok;

    } catch (error) {
        console.error(error);
        return false;
    }
}
