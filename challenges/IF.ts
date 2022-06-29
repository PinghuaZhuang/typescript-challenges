type If<T extends boolean, A, B> = T extends true ? A : B;

type IFA = If<true, 'a', 'b'>  // expected to be 'a'
type IFB = If<false, 'a', 'b'> // expected to be 'b'

const retA: IFA = 'a';
// const retB: IFB = 'a'; // error

type MyExclude<T, U> = T extends U ? never : T;

type ExcludeType1 = string | number | { name: string };

const retExclude1: MyExclude<ExcludeType1, number | string> = {
  name: 'string',
}
// const retExclude2: MyExclude<ExcludeType1, number> = 1111; error
