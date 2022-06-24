/**
 * 1. 不能引用 d.ts 文件
 * 2. declare namespace的子属性添加不加 export 没有区别.
 */
// import { Person } from './typings.ts';

const testNamespace: TestNamespace.Person = {
  name: 'this is string',
};
