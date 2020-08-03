import { SimpleClass } from './SimpleClass';

describe('Hello world', () => {
  it('contains 12 charactes', () =>
    expect(SimpleClass.sayHelloWorld().length).toEqual(12));

  it('says Hello World!', () =>
    expect(SimpleClass.sayHelloWorld()).toEqual('Hello World!'));
});
