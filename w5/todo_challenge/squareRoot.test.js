//console.log(todos);
function squareRoot(number) {
    return Math.sqrt(number);
}

test('Square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
})