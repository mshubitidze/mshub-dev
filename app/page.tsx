import { Icons } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100svh]">
      <SiteHeader />
      <div className="flex flex-1 flex-col items-center justify-center gap-1">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "h-full"
            )}
          >
            <Icons.gitHub className="h-5 w-5 sm:h-7 sm:w-7 md:h-11 md:w-11 mr-2" />
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-tight tracking-tighter">
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
            <Icons.twitter className="h-5 w-5 sm:h-7 sm:w-7 md:h-11 md:w-11 stroke-[rgb(29,155,240)] fill-[rgb(29,155,240)] mr-2" />
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-tight tracking-tighter">
              twitter.com/_mshub
            </h1>
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
