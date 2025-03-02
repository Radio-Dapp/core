import type { FormSubmitEvent } from "../types/utils.d.ts";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseFormEventData(event: FormSubmitEvent) {
  return Object.fromEntries(
    new FormData(event.currentTarget),
  );
}

export function chooseRandomFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function formatAddress(address: string) {
  return (
    address.slice(0, 5 + 2) +
    "..." +
    address.slice(address.length - 5, address.length)
  );
}

export function truncateString(description: string, length: number) {
  return description.length > length ? `${description.substring(0, length)}...` : description
}

export function generateRandomHash(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}