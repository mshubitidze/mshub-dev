import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex flex-col gap-2 pb-24">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-full"
          )}
        >
          <Icons.gitHub className="mr-2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl">
            /mshubitidze
          </h1>
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-full"
          )}
        >
          {/* fill-[rgb(29,155,240)] */}
          <Icons.twitter className="mr-2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl">
            /_mshub
          </h1>
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
      <Link href={siteConfig.links.threads} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-full"
          )}
        >
          <Icons.threads className="mr-2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl">
            @mshubit
          </h1>
          <span className="sr-only">Threads</span>
        </div>
      </Link>
    </main>
  )
}
