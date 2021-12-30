export function searchItem(arr, arrId) {
  const objList = arr.find((el) => el.idList === arrId[0]);
  const objItem = objList.data.find((el) => el.idItem === arrId[1]);
  return objItem;
}
