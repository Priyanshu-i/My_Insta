// minifaker.d.ts
declare module 'minifaker' {
    export function array<T>(length: number, generator: (index: number) => T): T[];
    export function username(options?: { locale?: string }): string;
  }
  