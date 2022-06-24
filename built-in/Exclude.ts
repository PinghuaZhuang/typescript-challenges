// 从联合类型T中排除U的类型成员，来构造一个新的类型。

type ExcludeType1 = string | number | { name: string };

// T 是 U 的超集合
type MyExclude<T, U> = T extends U ? never : T;

const retExclude1: MyExclude<ExcludeType1, number | string> = {
  name: 'string',
}
const retExclude2: MyExclude<ExcludeType1, number> = 'haha';
