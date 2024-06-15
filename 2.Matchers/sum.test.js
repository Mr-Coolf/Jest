//  .toBe() is a matcher that is used for primitive values

test('2 + 2 is 4', () => {
    expect(2 + 2).toBe(4);
})

//  .toEqual() is a matcher to check equality of objects and arrays

test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2;

    expect(data).toEqual({one: 1, two:2})

})

//  .toBeFalsy() is a matcher to check if a value is false

test('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
})

//  .toBeTruthy() is a matcher to check if a value is true

test('one is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
})

//  .toThrow() is a matcher for error handling

const myFunction = require('./sum')

test('throws on invalid input', () => {
    expect(() => {
        myFunction("6")
    }).toThrow();
})