import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should clear the calculator when "AC" is pressed', () => {
    const obj = {
      total: '5',
      next: '6',
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should append a digit to "next" when a number button is pressed', () => {
    const obj = {
      total: '5',
      next: '6',
      operation: '+',
    };
    const result = calculate(obj, '2');
    expect(result).toEqual({
      total: '5',
      next: '62',
      operation: '+',
    });
  });
});
