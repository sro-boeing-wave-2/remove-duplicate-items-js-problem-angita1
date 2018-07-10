/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const uniqueArray = Array.from(new Set(items));
  return uniqueArray;
};
module.exports = removeDuplicateItems;
