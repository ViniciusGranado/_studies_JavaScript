function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let minorValueIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minorValueIndex]) {
        minorValueIndex = j;
      };
    };

    if (list[minorValueIndex] !== list[i]) {
      const aux = list[minorValueIndex];
      list[minorValueIndex] = list[i];
      list[i] = aux;
    };
  };

  return list;
}
