type ClassMethodDecorator = (
  value: Function,
  context: ClassMethodDecoratorContext
) => void | (() => void);

type Decorator<T> = (
  value: T,
  context: ClassDecoratorContext
) => void | typeof value;

const SayHello: Decorator<typeof Person> = (value, context) => {
  console.log(value, context);
  return value;
};

const SayHelloBefore: ClassMethodDecorator = (value, context) => {
  console.log(value, context);
};

@SayHello
class Person {
  name!: string;

  accessor x!: string;

  static color = "red";

  @SayHelloBefore
  say() {}
}
