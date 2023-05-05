// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {createKysely} from "@vercel/postgres-kysely";
import {Database} from "@/kisily/test";
import {NextResponse} from "next/server";
/*import * as awilix from "awilix";*/
/*import * as utils from "@medusajs/utils";*/
import * as glob from "glob";
/*import * as sdk from "@medusajs/modules-sdk";*/

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default async function handler(
) {

  const client = createKysely<Database>()

  const tests = await client
      .selectFrom('test')
      .select(['id'])
      .execute()

  return NextResponse.json({ data: tests });
}