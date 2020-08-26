function quickSort (list, start=0, end=list.length - 1) {
  if (end - start <= 0) { return };

  const pivot = end;
  let i = start;
  let j = start - 1;
  
  do {
    if (list[i] <= list[pivot]) {
      j++;

      const aux = list[i];
      list[i] = list[j];
      list[j] = aux;
    };

    i++;
  } while (i < end);
  
  //Swap last item
  const aux = list[pivot];
  list[pivot] = list[j + 1];
  list[j + 1] = aux;
  
  //Apply to halves
  quickSort(list, start, j);
  quickSort(list, j + 1, end);

  return list;
}
