import operate from '../logic/operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test('subtracts two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  test('multiplies two numbers', () => {
    expect(operate('4', '3', '*')).toBe('12');
  });
});
