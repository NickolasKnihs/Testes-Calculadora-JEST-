import { isDot } from "./isDot"

describe ("isDot", () => {
    test ("returns true for '.' ", () => {
        expect (isDot(".")).toBe(true);
    });

    test ("returns false for 'a'", () => {
        expect (isDot("a")).toBe(false);
    });

    test ("returns false for 'a'", () => {
        expect (isDot("1")).toBe(false);
    });

    test ("returns false for 'a'", () => {
        expect (isDot("-1")).toBe(false);
    });

    test ("returns false for 'a'", () => {
        expect (isDot("0")).toBe(false);
    });

});