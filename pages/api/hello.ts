// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Test } from "@/dist-db/test"
import {MikroORM} from "@mikro-orm/core";

export const config = {
  /*runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1*/
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  const ormConfig = {
    dbName: process.env.POSTGRES_DATABASE,
    debug: process.env.APP_ENV === 'development',
    entities: [Test],
    baseDir: process.cwd(),
    host: process.env.POSTGRES_HOST,
    driverOptions: {
      connection: { ssl: true },
    },
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
    tsNode: process.env.APP_ENV === 'development',
    type: 'postgresql',
    user: process.env.POSTGRES_USER
  } as any

  const orm = await MikroORM.init(ormConfig)

  const em = orm.em.fork()
  const tests = await em.find(Test, {});

  res.status(200).json(tests)
}
