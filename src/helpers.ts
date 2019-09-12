export const createIDFromLabel = (label: string) => {
  return label.toLowerCase().replace(/\s+/g, '-');
};
