import { calculate } from "./calculate";

describe("calculate", () => {
    test("returns '3' for '+', '1', '2'", () => {
        expect(calculate("+", "1", "2")).toBe("3");
    });

    test("returns '0' for '-', '2', '2'", () => {
        expect(calculate("-", "2", "2")).toBe("0");
    });

    test("returns '10' for '*', '5', '2'", () => {
        expect(calculate("*", "5", "2")).toBe("10");
    });

    test("returns '2.5' for '/', '5', '2'", () => {
        expect(calculate("/", "5", "2")).toBe("2.5");
    });

    test("returns '0' for '/', '0', '5'", () => {
        expect(calculate("/", "0", "5")).toBe("0");
    });

    test("returns '0' for '+', '0', '0'", () => {
        expect(calculate("+", "0", "0")).toBe("0");
    });

});
