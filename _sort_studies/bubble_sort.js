function bubbleSort (list) {
  let swap;

  do {
    swap = false;

    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        const aux = list[i];
        list[i] = list[i + 1];
        list[i + 1] = aux;

        swap = true;
      };
    };

  } while (swap);

  return list;
}
