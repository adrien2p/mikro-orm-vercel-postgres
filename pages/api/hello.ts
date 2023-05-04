// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { NextRequest, NextResponse, } from 'next/server';
import { db } from "@vercel/postgres"

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
  const client = await db.connect();
  const data = await client.sql`SELECT * FROM test;`;
  return response.status(200).json({ data });
}
