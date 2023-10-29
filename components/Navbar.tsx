import Link from "next/link";

import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center p-6">
        <div className="md:flex">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex items-center gap-3">
              <div className="pl-2 font-extrabold tracking-wider">
                MARCOGIANNI.IT
              </div>
              <div className="ml-6">
                <Link
                  href="/blog"
                  className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium text-md"
                >
                  Blog
                </Link>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
