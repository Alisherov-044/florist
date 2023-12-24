import { formatCurrency } from ".";

describe("formatCurrency", () => {
    it("formats correctly", () => {
        expect(formatCurrency(100)).toBe("$100.00");
        expect(formatCurrency(1000)).toBe("$1,000.00");
        expect(formatCurrency(10000)).toBe("$10,000.00");
    });
});
