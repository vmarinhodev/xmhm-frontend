// /pages/api/revalidate.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface RevalidateRequestBody {
    paths: string[]; // An array of paths to revalidate
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Validate the request method and secret token
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    if (req.query.secret !== process.env.REVALIDATION_SECRET) {
        return res.status(401).json({ message: "Invalid secret token" });
    }

    const body = req.body as RevalidateRequestBody;

    if (!body?.paths || !Array.isArray(body.paths)) {
        return res.status(400).json({ message: "Invalid paths" });
    }

    try {
        // Loop through the paths array and revalidate each path
        await Promise.all(body.paths.map(async (path) => {
            await res.revalidate(path);
        }));

        return res.json({ revalidated: true, paths: body.paths });
    } catch (error) {
        console.error("Error during revalidation:", error);
        return res.status(500).json({ message: "Error revalidating" });
    }
}
