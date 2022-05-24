import { printHello } from "./functions";

test('prints Hello!', () => {
    expect(printHello()).toBe('Hello!')
})