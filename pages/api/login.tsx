import {LOGIN_ENDPOINT} from "../../src/constants/endpoints";
import {NextApiRequest, NextApiResponse} from "next";

export default async (
    req: NextApiRequest,
    res: NextApiResponse<unknown>
) => {
    if (req.method === 'POST') {
        try {
            // Forward the request to the backend
            const backendRes = await fetch(LOGIN_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Authorization': req.headers.authorization ?? "",
                    'Content-Type': 'application/json',
                }
            });

            const authJWT = backendRes.headers.get('authorization');
            const body = authJWT ?? ""

            res.status(backendRes.status).json(body);
        } catch (error) {
            res.status(error.response?.status ?? 500).json(error);
        }
    } else {
        res.status(405).end();
    }
};
