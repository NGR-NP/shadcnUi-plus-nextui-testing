"use client";
import { Key, useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import SunIcon from "./SvgIcon/SunSvgIcon";
import MoonIcon from "./SvgIcon/MoonSvgIcon";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { AppTheme } from "@/lib/utils";
import { type ThemeType } from "@/types/helperType";
import MoniterIcon from "./SvgIcon/MoniterSvgIcon";

type onSelectChangeProps = any;

interface ThemeOptionProps {
  value: ThemeType;
  icon: React.ReactNode;
}
const themeOptions: ThemeOptionProps[] = [
  {
    value: AppTheme.LIGHT,
    icon: <SunIcon className="group-hover:rotate-90" />,
  },
  {
    value: AppTheme.DARK,
    icon: <MoonIcon className="group-hover:animate-swing" />,
  },
  {
    value: AppTheme.SYSTEM,
    icon: <MoniterIcon className="group-hover:animate-bounce" />,
  },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  function toggleTheme(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "light" : "dark");
  }
  function changeTheme(keys: onSelectChangeProps) {
    setTheme(keys?.currentKey);
  }
  const themeKey = theme || AppTheme.SYSTEM;

  return (
    <>
      <Switch
        size="lg"
        color="secondary"
        className="max-md:hidden"
        defaultSelected={theme === "light" ? true : false}
        onChange={toggleTheme}
        checked={theme === "light" ? true : false}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      />
      <Dropdown>
        <DropdownTrigger>
          <Button
            isIconOnly
            aria-label="Toggle theme"
            className="bg-default-200 group"
          >
            <SunIcon className="rotate-0 scale-100 dark:-rotate-90 duration-500 dark:scale-0" />
            <MoonIcon className="absolute rotate-90 dark:group-hover:animate-swing scale-0 dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          onSelectionChange={changeTheme}
          selectedKeys={[themeKey]}
          defaultSelectedKeys={[themeKey]}
          variant="faded"
          aria-label="Choose themes"
        >
          {themeOptions.map((option: ThemeOptionProps) => {
            return (
              <DropdownItem
                key={option.value}
                startContent={option.icon}
                className="group ease-linear duration-300"
              >
                {option.value.toUpperCase()}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
