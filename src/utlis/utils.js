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
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
} 
