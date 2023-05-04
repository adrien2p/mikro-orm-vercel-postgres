// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataSource } from "typeorm/browser"

type Data = any

import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.status(200).json({})
}
