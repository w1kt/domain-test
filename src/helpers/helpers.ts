const createIDFromLabel = (label: string) => {
  return label.toLowerCase().replace(/\s+/g, '-');
};

const helpers = {
  createIDFromLabel
}
export default helpers;
