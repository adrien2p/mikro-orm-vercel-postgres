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
  const { productService } = await ProductModuleInitialize({
    database: {
      clientUrl: "postgres://postgres@localhost/medusa-products",
      schema: "public",
    }
  })

  const data = await productService.listVariants()

  res.status(200).json(data)
}
