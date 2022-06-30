declare function f1(arg: { a: number; b: string }, str: string): void;

type MyParameters<T> = T extends (...params: infer Params) => unknown ? [...Params] : never;

type T3 = MyParameters<typeof f1>; // [arg: { a: number; b: string }]
