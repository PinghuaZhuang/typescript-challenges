// 这里不能使用 keyof, keyof 不是数组
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Result = Concat<[4], [5]> // expected to be [1, 2]


const retConcat: Result = [4, 5]; // error
// const retConcat: Result = [1, 2]; // error
