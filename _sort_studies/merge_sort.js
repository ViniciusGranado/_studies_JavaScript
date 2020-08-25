function mergeSort (list) {
  if (list.length === 1) {
    return list;
  }

  // Apply to left
  const mergedLeft = mergeSort(list.slice(0, list.length / 2));
  // Apply to right
  const mergedRight = mergeSort(list.slice(list.length / 2));

  // Merge and return
  return mergeTwoSides(mergedLeft, mergedRight);
}

function mergeTwoSides (left, right) {
  const newArray = [];

  //Index of Left
  let i = 0;
  //Index of Right
  let j = 0

  while (i < left.length || j < right.length) {
    if (left[i] && right[j]) {
      if (left[i] <= right[j]) {
        newArray.push(left[i]);
        i++;
      } else {
        newArray.push(right[j]);
        j++;
      }
    } else {
      if (!left[i]) {
        newArray.push(right[j]);
        j++;
      } else {
        newArray.push(left[i]);
        i++;
      };
    };
  };

  return newArray;
}
