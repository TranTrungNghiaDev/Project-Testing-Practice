import { reverseString } from "./reverseString";

test('Reverse string', () => {
    expect(reverseString("Nghia")).toBe("aihgN");
})
test('Not allow null', () => {
    expect(reverseString()).not.toBeNull();
})