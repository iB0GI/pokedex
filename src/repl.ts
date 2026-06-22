export function cleanInput(input: string): string[] {
  const inputTrimmed = input.trim().toLowerCase();
  const words = inputTrimmed.split(/\s+/);
  return words;
}
