import Link from "next/link";
import { cacheLife } from "next/cache";

import { Reveal } from "@/components/Motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  DividerVerticalIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default async function Navbar() {
  "use cache";
  cacheLife("max");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-lg">
      <div className="flex h-14 items-center p-4 sm:p-6">
        <Reveal inView={false} distance={-8}>
          <Link
            href="/"
            className="mr-4 flex items-center rounded-md pl-2 text-[17px] font-semibold tracking-[1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            marcogianni
            <span className="font-bold pl-[1px] text-transparent bg-clip-text bg-gradient-to-r to-primary from-purple-500">
              .it
            </span>
          </Link>
        </Reveal>

        <Reveal
          inView={false}
          distance={-8}
          delay={0.08}
          className="flex flex-1 items-center justify-end space-x-1 sm:space-x-2"
        >
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/marcogianni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/marco-gianni/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </Button>
          <DividerVerticalIcon className="hidden sm:flex text-muted-foreground" />
          <ThemeSwitcher />
        </Reveal>
      </div>
    </header>
  );
}
