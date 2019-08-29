const sqInRect = require('./rectIntoSqr');

test('Given a 21 x 21 square', () => {
  expect(sqInRect(21, 21)).toBeNull();
});

test('Given a 50 x 50 square', () => {
  expect(sqInRect(50, 50)).toBeNull();
});

test('Given a 11 x 11 square', () => {
  expect(sqInRect(11, 11)).toBeNull();
});

test('Given a 5 x 3 rectangle', () => {
  expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1]);
});

test('Given a 3 x 5 rectangle', () => {
  expect(sqInRect(3, 5)).toEqual([3, 2, 1, 1]);
});

test('Given a 10 x 7 rectangle', () => {
  expect(sqInRect(10, 7)).toEqual([7, 3, 3, 1, 1, 1]);
});

test('Given a 20 x 14 rectangle', () => {
  expect(sqInRect(20, 14)).toEqual([14, 6, 6, 2, 2, 2]);
});
