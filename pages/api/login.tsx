import {LOGIN_ENDPOINT} from "../../src/constants/endpoints";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<unknown>
): Promise<void> {
    if (req.method === 'POST') {
        try {
            const backendRes = await fetch(LOGIN_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Authorization': req.headers.authorization ?? "",
                    'Content-Type': 'application/json',
                }
            });

            const authJWT = backendRes.headers.get('authorization');
            console.log("backendRes", backendRes,"authJWT" ,authJWT);
            const backendResBody = await backendRes.json();
            console.log("backendResBody", backendResBody)
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
