const readonlyOrign = {
  name: 'name',
  age: 11,
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

const retReadonly: MyReadonly<typeof readonlyOrign> = {
  name: 'name2',
  age: 1,
}
const retReadonly2: MyReadonly<Pick<typeof readonlyOrign, 'name'>> = {
  name: 'name2',
}
