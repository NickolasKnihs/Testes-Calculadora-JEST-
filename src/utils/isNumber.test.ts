import { isNumber } from "./isNumber";

describe("isNumber", () => {
    test("returns true for '0'", () => {
        expect(isNumber("0")).toBe(true);
    });

    test("returns true for '123'", () => {
        expect(isNumber("123")).toBe(true);
    });

    test("returns true for '-123'", () => {
        expect(isNumber("-123")).toBe(true);
    });

    test("returns true for '0.5'", () => {
        expect(isNumber("0.5")).toBe(true);
    });

    test("returns true for '-0.5'", () => {
        expect(isNumber("-0.5")).toBe(true);
    });

    test("returns true for '1.23'", () => {
        expect(isNumber("1.23")).toBe(true);
    });

    test("returns true for '-1.23'", () => {
        expect(isNumber("-1.23")).toBe(true);
    });

    test("returns false for '.'", () => {
        expect(isNumber(".")).toBe(false);
    });

    test("returns false for 'a'", () => {
        expect(isNumber("a")).toBe(false);
    });

    test("returns false for empty string", () => {
        expect(isNumber("")).toBe(false);
    });

    test("returns false for '1.2.3'", () => {
        expect(isNumber("1.2.3")).toBe(false);
    });

    test("returns false for '1a'", () => {
        expect(isNumber("1a")).toBe(false);
    });

    test("returns false for 'abc'", () => {
        expect(isNumber("abc")).toBe(false);
    });
});
