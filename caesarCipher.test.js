import { caesarCipher } from "./caesarCipher";

test('Caesar Cipher xyz', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test('Caesar Cipher Hello', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test('Caesar Cipher Hello, World!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
})
