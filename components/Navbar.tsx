import Link from "next/link";

import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex h-14 items-center p-6">
        <div className="md:flex">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex items-center gap-1">
              <div className="pl-2 font-extrabold tracking-wider">
                marcogianni_it
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
