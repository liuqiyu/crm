/**
 * search
 * create by lqy 2018/3/17
 */

function filter(cell, condition, key) {
  const arr = [];
  for (let i = 0; i < cell.length; i += 1) {
    if (cell[i][key] === condition[key].value || !condition[key].value) {
      arr.push(cell[i]);
    }
  }
  return arr;
}

function searchData(list, condition) {
  for (let key in condition) {
    list = filter(list, condition, key);
  }
  return list;
}

export {
  searchData,
};
