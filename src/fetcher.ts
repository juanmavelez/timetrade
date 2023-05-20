import {getBearer} from "./utils/getBearer";

//Required to use SWR with auth
export const fetcher = (url: string) => fetch(url,{
    headers: {
        'Authorization': `Bearer ${getBearer()}`,
        'Content-Type': 'application/json'
    }
} ).then(r => r.json())
