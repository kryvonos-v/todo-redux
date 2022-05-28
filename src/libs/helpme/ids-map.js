export function idsMap(arr) {
  const obj = {};

  arr.forEach(item => {
    obj[item.id] = item;
  })

  return obj;
}
