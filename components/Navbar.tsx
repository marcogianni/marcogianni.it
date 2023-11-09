import Link from "next/link";

import { Motion } from "@/components/Motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  DividerVerticalIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex h-14 items-center p-6">
        <div className="md:flex">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex items-center gap-1">
              <Motion
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
              >
                <div className="text-lg pl-2 font-bold tracking-wider">
                  marcogianni
                  <span className="text-primary font-black pl-[1px]">.it</span>
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
          <div className="flex flex-1 items-center space-x-2 justify-end">
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
        </Motion>
      </div>
    </header>
  );
}
