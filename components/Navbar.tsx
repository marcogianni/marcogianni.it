import Link from "next/link";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  DividerVerticalIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex h-14 items-center p-6">
        <div className="md:flex">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex items-center gap-1">
              <div className="pl-2 font-bold tracking-wider">
                marcogianni
                <span className="text-primary font-black pl-[1px]">.it</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center space-x-2 justify-end">
          {/* <ul className="flex gap-6">
            <li>Recent Projects</li>
            <li>Blog</li>
          </ul>
          <DividerVerticalIcon /> */}
          <Button variant="outline" size="icon">
            <EnvelopeClosedIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
          <Button variant="outline" size="icon">
            <GitHubLogoIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
          <Button variant="outline" size="icon">
            <LinkedInLogoIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
          <DividerVerticalIcon />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
