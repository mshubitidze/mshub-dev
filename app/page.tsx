import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-1">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-full"
          )}
        >
          <Icons.gitHub className="mr-2 h-5 w-5 sm:h-7 sm:w-7 md:h-11 md:w-11" />
          <h1 className="text-lg font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
            github.com/mshubitidze
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
          <Icons.twitter className="mr-2 h-5 w-5 fill-[rgb(29,155,240)] stroke-[rgb(29,155,240)] sm:h-7 sm:w-7 md:h-11 md:w-11" />
          <h1 className="text-lg font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
            twitter.com/_mshub
          </h1>
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
    </main>
  )
}
