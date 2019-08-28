const sqInRect = require('./rectIntoSqr');

// test('Given a true rectangle', () => {
//   expect(sqInRect(3, 5)).toBe('true rectangle');
// });

test('Given a square, not a rectangle', () => {
  expect(sqInRect(5, 5)).toBeNull();
});

test('Given a 5 x 3 rectangle', () => {
  expect(sqInRect(5, 3)).toEqual([3,2,1,1]);
});