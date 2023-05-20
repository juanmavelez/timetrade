import {NextApiRequest, NextApiResponse} from "next";
import {SIGN_UP} from "../../src/constants/endpoints";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<unknown>
): Promise<void> {
    if (req.method === 'POST') {
        try {
            const backendRes = await fetch(SIGN_UP, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            });
            const authJWT = backendRes.headers.get('authorization');
            const body = authJWT ?? ""
            res.status(backendRes.status).json(body);
        } catch (error: unknown) {
            res.status(500).json(error);
        }
    } else {
        res.status(405).end();
    }
};
