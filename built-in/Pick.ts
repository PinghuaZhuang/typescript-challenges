const pickOrigin = {
  name: 'name',
  age: 'age',
}

type MyPick<T, P extends keyof T> = {
  [K in P]: T[K];
}

const retPick: MyPick<typeof pickOrigin, 'name'> = {
  name: 'hah',
  // age: 'age',
}
