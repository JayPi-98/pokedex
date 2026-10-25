export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map(string => string.trim().toLowerCase())
    .filter(string => string !== "");
}