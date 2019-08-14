const sqInRect = require('./rectIntoSqr');

test('Given a true rectangle', () => {
  expect(sqInRect(3, 5)).toBe('true rectangle');
});

test('Given a square, not a rectangle', () => {
  expect(sqInRect(5, 5)).toBeNull();
});