import { range } from ".";

describe("range", () => {
    it("works", () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4]);
        expect(range(7, 11)).toEqual([7, 8, 9, 10]);
        expect(range(0, 1)).toEqual([0]);
    });
});
