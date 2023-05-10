// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { initialize as ProductModuleInitialize, default as test } from "@medusajs/product"

export const config = {
  /*runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1*/
};

declare global {
  var productModule: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  global.productModule = global.productModule ?? await ProductModuleInitialize({
    database: {
      clientUrl: process.env.POSTGRES_URL!,
      schema: "public",
    }
  })
  const data = await productModule.listVariants()

  res.status(200).json(data)
}
