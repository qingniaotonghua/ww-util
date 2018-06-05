export function groupByToMap(list, fields) {
  var t = _groupBy(list, fields[0]);
  if (fields.length == 1) {
    return t;
  } else {
    var temp = {};
    for (var key in t) {
      var s = groupBy(t[key], fields.slice(1, fields.length));
      temp[key] = s;
    }
    return temp;
  }
}

export function _groupBy(list, field) {
  const map = {};
  for (const record of list) {
    const key = record[field];
    if (map[key] == null) {
      map[key] = [];
    }
    map[key].push(record);
  }
  return map;
}




export function groupToHierarchy(list, fieldArray) {
  const root = { key: null, data: list };
  if (fieldArray.length === 0) {
    return root;
  }
  const nodes = groupToArray(list, fieldArray);
  root.children = nodes;
  return root;
}

export function groupToArray(list, fieldArray, index = 0) {
  if (fieldArray.length <= index) {
    return;
  }
  let field = fieldArray[index];
  let nodes = _groupToArray(list, field);
  nodes.forEach(node => {
    node.children = groupToArray(node.data, fieldArray, index + 1);
  });
  return nodes;
}

export function _groupToArray(list, field) {
  const children = [];
  const map = groupBy(list, field);
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      children.push({ field, key, data: map[key] });
    }
  }
  return children;
}