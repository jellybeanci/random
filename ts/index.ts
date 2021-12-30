import {int} from "@jellybeanci/int";

export function randomGaussian(degree: number = 3): number {
  // was 6
  let rand = 0;
  for (let i = 0; i < degree; i++) {
    rand += Math.random();
  }
  const gauss = rand / degree;
  return (gauss * 2) - 1; // (-1, 1)
}

export function randomRange(start: number, end?: number): number {
  const min = !!end ? start : 0;
  const max = !!end ? end : start;
  return min + Math.random() * (max - min);
}

export function randomGaussianRange(start: number, end?: number, degree: number = 3): number {
  const min = !!end ? start : 0;
  const max = !!end ? end : start;
  return min + (0.5 * (1 + randomGaussian(degree))) * (max - min);
}

export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

export function randomInt(start: number, end?: number): number {
  return int(randomRange(start, end));
}