import { type SyntheticEvent } from 'react';
function handleImgFailed(e: SyntheticEvent<HTMLImageElement>, src: string) {
  e.currentTarget.src = src
}

type WordsTuple = [string, string, string]
function pluralize(count: number, [one, few, many]: WordsTuple): string {
  const n = Math.abs(Number(count)) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return many;
  if (n1 > 1 && n1 < 5) return few;
  if (n1 === 1) return one;
  return many;
}
export {handleImgFailed, pluralize}