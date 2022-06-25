// type MyAwaited<T> = T extends Promise<infer P> ? P : never;

const retAwaited: () => MyAwaited<Promise<string>> = () => 'string';

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T
