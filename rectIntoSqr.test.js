const sqInRect = require('./rectIntoSqr');

test('Given a true rectangle', () => {
  expect(sqInRect(5, 5)).toBeTruthy();
});