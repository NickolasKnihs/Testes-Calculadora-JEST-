import { sum, subtract, multiply, divide, equal, allClear } from "./operations";

describe("sum", () => {
    test("returns 3 for 1 + 2", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("returns -1 for 1 + (-2)", () => {
        expect(sum(1, -2)).toBe(-1);
    });

    test("returns 0 for 0 + 0", () => {
        expect(sum(0, 0)).toBe(0);
    });
});

describe("subtract", () => {
    test("returns -1 for 1 - 2", () => {
        expect(subtract(1, 2)).toBe(-1);
    });

    test("returns 3 for 5 - 2", () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test("returns 0 for 0 - 0", () => {
        expect(subtract(0, 0)).toBe(0);
    });
});

describe("multiply", () => {
    test("returns 6 for 2 * 3", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test("returns -6 for 2 * (-3)", () => {
        expect(multiply(2, -3)).toBe(-6);
    });

    test("returns 0 for 0 * 0", () => {
        expect(multiply(0, 0)).toBe(0);
    });
});

describe("divide", () => {
    test("returns 2 for 6 / 3", () => {
        expect(divide(6, 3)).toBe(2);
    });

    test("returns -2 for 6 / (-3)", () => {
        expect(divide(6, -3)).toBe(-2);
    });

    test("returns Infinity for 6 / 0", () => {
        expect(divide(6, 0)).toBe(Infinity);
    });

    test("returns 0 for 0 / 6", () => {
        expect(divide(0, 6)).toBe(0);
    });
});

describe("equal", () => {
    test("returns 3 for any value as the first argument and 3 as the second argument", () => {
        expect(equal(1, 3)).toBe(3);
        expect(equal(0, 3)).toBe(3);
        expect(equal(-1, 3)).toBe(3);
    });
});

describe("allClear", () => {
    test("returns 0", () => {
        expect(allClear()).toBe(0);
    });
});
