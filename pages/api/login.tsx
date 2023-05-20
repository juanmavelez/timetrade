import {LOGIN_ENDPOINT} from "../../src/constants/endpoints";
import {NextApiRequest, NextApiResponse} from "next";

export default async (
    req: NextApiRequest,
    res: NextApiResponse<unknown>
) => {
    if (req.method === 'POST') {
        try {
            const backendRes = await fetch(LOGIN_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Authorization': req.headers.authorization ?? "",
                    'Content-Type': 'application/json',
                }
            });

            const authJWT = backendRes.headers.get('authorization');
            const backendResBody = await backendRes.json();
            const body = JSON.stringify({
                token: authJWT,
                user: backendResBody
            })

            res.status(backendRes.status).json(body);
        } catch (error: unknown) {
            res.status(500).json(error);
        }
    } else {
        res.status(405).end();
    }
};
