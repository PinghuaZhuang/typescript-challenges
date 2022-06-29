type If<T, A, B> = T extends boolean ? (T extends true ? A : B) : never;

type IFA = If<true, 'a', 'b'>  // expected to be 'a'
type IFB = If<false, 'a', 'b'> // expected to be 'b'

const retA: IFA = 'a';
// const retB: IFB = 'a'; // error
