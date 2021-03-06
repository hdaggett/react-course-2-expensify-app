const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet user', () => {
    const result = generateGreeting('Heather');
    expect(result).toBe('Hello Heather!');
});

test('should greet user without name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});