/**
 *
 * What is it doing?
 * Each recursive call returns a flat array for that 'slice' of the original input,
 * and the spread operator lets you merge those results into the main result array.
 * Voila.
 *
 * @function flattenArray
 * @param {Array} arr - a nested array of values
 * @returns {Array} - a flat array
 */
function flattenArray(arr) {
  let result = [];

  arr.forEach((element) => {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      result.push(...flattenArray(element));
    }
  });

  return result;
}

module.exports = flattenArray;
