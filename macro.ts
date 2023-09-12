export function convertTemp(fahrenheit: number): number {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius * 100) / 100;
}