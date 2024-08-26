import { calculator } from "./calculator";

// Add
test('Add 2 positive', () => {
    expect(calculator.add(9,8)).toBe(17);
})

test('Add 1 positive with 1 negative', () => {
    expect(calculator.add(9, -8)).toBe(1);
})

test('Add 2 negatives', () => {
    expect(calculator.add(-9,-8)).toBe(-17);
})

// Substract
test('Subtract 2 positive', () => {
    expect(calculator.subtract(9, 9)).toBe(0);
})

test('Subtract 1 positive with 1 negative', () => {
    expect(calculator.subtract(9, -9)).toBe(18);
})

test('Subtract 2 negative', () => {
    expect(calculator.subtract(-9, -9)).toBe(0);
})

// Multiple
test('Multiple 2 positive', () => {
    expect(calculator.multiply(7, 8)).toBe(56);
})

test('Multiple 1 positive with 1 negative', () => {
    expect(calculator.multiply(7, -8)).toBe(-56);
})

test('Multiple 2 negative', () => {
    expect(calculator.multiply(-7, -8)).toBe(56);
})

// Divide
test('Divide 2 positive', () => {
    expect(calculator.divide(8, 4)).toBe(2);
})

test('Divide 1 positive with 1 negative', () => {
    expect(calculator.divide(8, -4)).toBe(-2);
})

test('Divide 2 negative', () => {
    expect(calculator.divide(-8, -4)).toBe(2);
})

test('Divisor is zero', () => {
    expect(calculator.divide(-8, 0)).toBe(undefined);
})

// Not allow null
test('Not allow null', () => {
    expect(calculator.add(null, null)).not.toBeNull();
    expect(calculator.subtract(null, null)).not.toBeNull();
    expect(calculator.multiply(null, null)).not.toBeNull();
    expect(calculator.divide(null, null)).not.toBeNull();
})