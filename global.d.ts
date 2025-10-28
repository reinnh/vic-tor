declare module "*.css";
declare module "*.scss";
declare module "*.png"

declare module "maath/random/dist/maath-random.esm" {
  export function randFloat(min: number, max: number): number;
  export function randInt(min: number, max: number): number;
  export function randSign(): -1 | 1;
  export function randColor(): string;

  export function inSphere(
    array: Float32Array,
    options?: { radius?: number }
  ): Float32Array;

  export function onSphere(
    array: Float32Array,
    options?: { radius?: number }
  ): Float32Array;

  export function inCircle(
    array: Float32Array,
    options?: { radius?: number }
  ): Float32Array;

  export function onCircle(
    array: Float32Array,
    options?: { radius?: number }
  ): Float32Array;
}
