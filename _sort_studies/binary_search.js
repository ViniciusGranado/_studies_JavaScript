function binarySort (list, wantedNumber, start=0, end=list.length - 1) {
  if (start <= end) {
    const middleIndex = Math.floor(((start + end)) / 2);

    if (list[middleIndex] === wantedNumber) {
    return middleIndex 
    } else {
        if (list[middleIndex] > wantedNumber) {
          return binarySort(list, wantedNumber, start, middleIndex - 1);
        } else {
          return binarySort(list, wantedNumber, middleIndex + 1, end);
        };
    };
  };
  
  return -1;
}
