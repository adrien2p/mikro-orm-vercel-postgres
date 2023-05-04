// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { NextRequest, NextResponse, } from 'next/server';
/*import { db } from "@vercel/postgres"*/

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async function handler (request: NextRequest) {
  /*const client = await db.connect();*/

  let data: any[] = []
  /*try {
    data = await client.sql`SELECT * FROM test;`;
  } catch (error) {
    return NextResponse.json({ error });
  }*/

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    data: JSON.stringify(data)
  });
};
