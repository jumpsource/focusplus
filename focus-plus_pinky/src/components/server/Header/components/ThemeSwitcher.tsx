"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DarkThemeIcon } from "../../icons/lib/DarkThemeIcon";
import { LightThemeIcon } from "../../icons/lib/LightThemeIcon";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LightThemeIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <DarkThemeIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Mudar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-2 justify-start items-center"
          onClick={() => setTheme("light")}
        >
          <LightThemeIcon className="size-4" />
          <span>Claro</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 justify-start items-center"
          onClick={() => setTheme("dark")}
        >
          <DarkThemeIcon className="size-4" />
          <span>Escuro</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
