import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
/*import prisma from '@/lib/prisma'*/

const inter = Inter({ subsets: ['latin'] })

/*export const runtime = 'experimental-edge'*/
/*export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'*/

export default async function Home() {
  /*const data = await prisma.test.findMany()
  console.log(data)*/

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/api/hello">TEST</Link>
      </div>
    </main>
  )
}
