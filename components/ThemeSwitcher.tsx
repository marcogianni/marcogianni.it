"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex gap-3 items-center px-2 py-1">
      <SunIcon className="w-4 h-4" />
      <Switch defaultChecked={true} onCheckedChange={handleChange} />
      <MoonIcon className="w-4 h-4" />
    </div>
  );
}
