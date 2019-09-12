/**
 * Removed spaces from a string and transforms to lowercase
 * Useful for converting lables into IDs. 
 * @param label 
 */
const createIDFromLabel = (label: string) => {
  return label.toLowerCase().replace(/\s+/g, '-');
};

const helpers = {
  createIDFromLabel
}
export default helpers;
