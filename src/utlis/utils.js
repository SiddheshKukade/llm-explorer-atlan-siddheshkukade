export const convertToK = (downloads) => {
  if (downloads >= 1000) {
    return (downloads / 1000).toFixed(1) + 'K';
  }
  return downloads;
};

export const getFirstTypeName = (parameters) => {
  for (const typeName in parameters) {
    return typeName
  }
}