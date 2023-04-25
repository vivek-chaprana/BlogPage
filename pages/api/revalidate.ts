// https://<your-site.com>/api/revalidate?secret=<token>    --> Example url
// http://localhost:3000/api/revalidate?path=/&secret=bebed9f8448a44b5aa476df7b8dfd558917cf85c60b809688a3ba3e76e580b45


import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({
            "message": "Invalid Token"
        })
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({revalidated: true})

}