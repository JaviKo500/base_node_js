import { describe } from "node:test";

describe('App', () => {
    test('should be true', () => {
        // 1. arrange
        const num1 = 10;
        const num2 = 20;
        // 2. act
        const result = num1 + num2;
        // 3. assert
        expect(result).toBe(30);
    });
});