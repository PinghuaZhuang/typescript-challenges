type Equal1<X, Y> =  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// readonly 不能被 extends 区分
type eqret1 = Equal1<{ name: string }, { readonly name: string }>; // false
// any
type eqret2 = Equal1<any, string>; // false
