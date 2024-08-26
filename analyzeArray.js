const analyzeArray = (array = [1, 8, 3, 4, 2, 6]) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  const average = sum / array.length;
  const length = array.length;

  const object = {
    average,
    min,
    max,
    length,
  };

  return object;
};

export { analyzeArray };
