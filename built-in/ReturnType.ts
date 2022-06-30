const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"

type MyReturnType<T> = T extends (
  ...params: unknown[]
) => /* 这里写 unknown 就是指定类型了, 就不能推断 */ infer U
  ? U
  : never;
