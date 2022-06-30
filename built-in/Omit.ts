type Equal<X, Y> =  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview2 = MyOmit<Todo, 'description' | 'title'>
type TodoPreview3 = MyOmit2<Todo, 'description' | 'title'>

const todo: TodoPreview2 = {
  completed: false,
}
// const todo2: TodoPreview3 = {
//   completed: false,
// }

type MyExclude1<T, U> = T extends U ? never : T;

/**
 * // 还是少了 title, description
 * type TodoPreview2 = {
    title: never;
    description: never;
    completed: boolean;
}
 */
type MyOmit1<T, U> = {
  [P in keyof T]: P extends U ? never : T[P];
};
type MyOmit2<T, U> = {
  // 为啥这么写不行???
  // 类似与匿名函数自执行
  [P in (keyof T extends U ? never : keyof T)]: T[P]
};
type MyOmit<T, U> = {
  [P in MyExclude1<keyof T, U>]: T[P]
};

type test1 = ('description' | 'title') extends 'title' ? true : false // false
type test2 = 'title' extends ('description' | 'title') ? true : false // true
type test3 = Todo extends { title: string } ? true : false;
//
