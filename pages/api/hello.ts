// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataSource } from "typeorm/browser"

import { NextRequest, NextResponse, } from 'next/server';

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async (request: NextRequest) => {
  const dataSource = new DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    database: process.env.POSTGRES_DATABASE,
    extra: {},
    schema: "public",
    entities: [],
  })

  await dataSource.initialize()

  const manager = dataSource.manager
  const data = await manager.query(`SELECT * FROM test`)

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    data: JSON.stringify(data)
  });
};
