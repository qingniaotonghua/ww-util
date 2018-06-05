export function intersection(array1, array2) {
  if (typeOf(array1) !== 'array') {
    array1 = [array1];
  }
  if (typeOf(array2) !== 'array') {
    array2 = [array2];
  }
  return array1.filter(function (n) {
    return array2.indexOf(n) !== -1;
  });
}