import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getSplicedTitle(title: string) {
  return title.length > 20
    ? title.substring(0, title.lastIndexOf(" ", 20)) + "..."
    : title;
}