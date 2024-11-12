import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Revalidation request received for:", req.body.paths);
  // Verify the secret to ensure it's an authorized request
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  // Parse the paths to revalidate from the request body
  const { paths } = req.body;
  console.log('Paths to revalidate', paths)

  if (!Array.isArray(paths) || paths.length === 0) {
    return res.status(400).json({ message: 'No paths provided for revalidation' });
  }

  try {
    // Revalidate each path provided
    for (const path of paths) {
      await res.revalidate(path);
      console.log('path', path)
    }
    return res.json({ revalidated: true, paths });
  } catch (err) {
    console.error("Error during revalidation:", err);
    return res.status(500).json({ message: 'Error revalidating', error: err });
  }
}
