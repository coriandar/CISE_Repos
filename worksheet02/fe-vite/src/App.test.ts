import { expect, test } from "vitest";

export function sum(a: number, b: number): number {
    return a + b;
}

test("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
});

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 5 to equal 6", () => {
    expect(sum(1, 5)).toBe(6);
});
