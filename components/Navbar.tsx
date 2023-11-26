import Link from "next/link";

import { Motion } from "@/components/Motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  DividerVerticalIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import NavbarEmailButton from "@/components/NavbarEmailButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex h-14 items-center p-4 sm:p-6">
        <div className="md:flex">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex items-center gap-1">
              <Motion
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
              >
                <div className="text-[17px] pl-2 font-semibold tracking-[1px]">
                  marcogianni
                  <span className="font-bold pl-[1px] text-transparent bg-clip-text bg-gradient-to-r to-primary from-purple-500">
                    .it
                  </span>
                </div>
              </Motion>
            </div>
          </Link>
        </div>

        <Motion
          className="flex flex-1 items-center space-x-2 justify-end"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-1 items-center space-x-1 sm:space-x-2 justify-end">
            <NavbarEmailButton />
            <a
              href="https://github.com/marcogianni"
              target="_blank"
              className="flex"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <GitHubLogoIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/marco-gianni/"
              target="_blank"
              className="flex"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <LinkedInLogoIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </a>
            <DividerVerticalIcon className="hidden sm:flex" />
            <ThemeSwitcher />
          </div>
        </Motion>
      </div>
    </header>
  );
}
