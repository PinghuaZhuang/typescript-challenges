type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

// 循环遍历
type Includes2<T extends readonly any[], U> = {
  [K in keyof T]: Equal<T[K], U>
}[number] extends false
  ? false
  : true;

// 递归
type Includes<T extends unknown[], U> = T extends [infer first, ...infer rest]
  ? Equal<first, U> extends true
    ? true
    : Includes<rest, U>
  : false

type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `true`

// 任何类型都可以分配给any, any也可以分配给任何数
let a: string;
let b: any;
a = b;

// https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
type EqualA = (<T>() => T extends false ? 1 : 2) extends (<T>() => T extends boolean ? 1 : 2) ? true : false;

// 参数少的覆盖参数多的
type FnA = ((a: string) => string) extends ((a: string) => string) ? true : false; // true
type FnB = ((a: string, b: number) => string) extends ((a: string) => string) ? true : false; // false
type FnC = ((a: string) => string) extends ((a: string, b: number) => string) ? true : false; // true
