import { capitalize } from "./capitalize";

test('String has all lowercase', () => {
    expect(capitalize("nghia")).toBe("Nghia");
})

test('String has capitalize & lowercase', () => {
    expect(capitalize("nGhIa")).toBe("Nghia");
})

test('Not allow null', () => {
    expect(capitalize()).not.toBeNull();
})