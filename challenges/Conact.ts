type Concat<T extends unknown[], U extends unknown[]> = [keyof T, keyof U];

type Result = Concat<[1], [2]> // expected to be [1, 2]

const retConcat: Result = [1, 2];
// const retConcat: Result = [1]; // error
