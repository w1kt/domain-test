import helpers from "./helpers";

it('should expose a method to format labels into IDs', () => {
  expect(helpers.createIDFromLabel('Test Label')).toBe('test-label');
});
