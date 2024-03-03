import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum AppTheme {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}
