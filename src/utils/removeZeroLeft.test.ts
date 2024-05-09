import { removeZeroLeft } from "./removeZeroLeft";

describe("removeZeroLeft", () => {
    test("returns '0' for '0'", () => {
        expect(removeZeroLeft("0")).toBe("0");
    });

    test("returns '123' for '0123'", () => {
        expect(removeZeroLeft("0123")).toBe("123");
    });

    test("returns '123' for '00123'", () => {
        expect(removeZeroLeft("00123")).toBe("123");
    });

    test("returns '-123' for '-0123'", () => {
        expect(removeZeroLeft("-0123")).toBe("-123");
    });

    test("returns '0.5' for '0.5'", () => {
        expect(removeZeroLeft("0.5")).toBe("0.5");
    });

    test("returns '0.5' for '00.5'", () => {
        expect(removeZeroLeft("00.5")).toBe("0.5");
    });

    test("returns '-0.5' for '-0.5'", () => {
        expect(removeZeroLeft("-0.5")).toBe("-0.5");
    });

    test("returns '-0.5' for '-00.5'", () => {
        expect(removeZeroLeft("-00.5")).toBe("-0.5");
    });

    test("returns '1.23' for '01.23'", () => {
        expect(removeZeroLeft("01.23")).toBe("1.23");
    });

    test("returns '1.23' for '001.23'", () => {
        expect(removeZeroLeft("001.23")).toBe("1.23");
    });

    test("returns 'abc' for 'abc'", () => {
        expect(removeZeroLeft("abc")).toBe("abc");
    });

    test("returns 'a' for 'a'", () => {
        expect(removeZeroLeft("a")).toBe("a");
    });

    test("returns '' for empty string", () => {
        expect(removeZeroLeft("")).toBe("");
    });
});
