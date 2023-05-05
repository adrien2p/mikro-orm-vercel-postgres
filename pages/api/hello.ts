// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {createKysely} from "@vercel/postgres-kysely";
import {Database} from "@/kisily/test";

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
  const client = createKysely<Database>()

  const tests = await client
      .selectFrom('test')
      .select(['id'])
      .execute()

  return response.status(200).json({ data: tests });
}