export function generateCsv(arr) {
  let str = "";

  if (arr?.length > 0) {
    arr.forEach((item, _) => (arr.indexOf(item) !== arr.length - 1 ? (str += item + ", ") : (str += item)));
  }
  return str;
}
