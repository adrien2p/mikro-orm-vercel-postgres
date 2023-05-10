// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { initialize as ProductModuleInitialize } from "@medusajs/product"

export const config = {
  /*runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1*/
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  const productModule = await ProductModuleInitialize({
    database: {
      clientUrl: process.env.POSTGRES_URL!,
      schema: "public",
    }
  })

  console.log(productModule)
  const data = await productModule.listVariants()

  res.status(200).json(data)
}
