// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataSource } from "typeorm/browser"

import { NextRequest, NextResponse, } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async function handler (request: NextRequest) {

  let data = []

  const client = new PrismaClient()
  data = await client.test.findMany()

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    data: JSON.stringify(data)
  });
};
