export const sortByNumber = (a: number, b: number, sortType: string) => {
  return sortType === 'desc' ? b - a : a - b;
};
export const sortByString = (a: string, b: string, sortType: string) => {
  const firstOption = a.toLowerCase();
  const lastOption = b.toLowerCase();
  if (sortType == 'asc') {
    if (firstOption < lastOption) {
      return -1;
    }
    if (firstOption > lastOption) {
      return 1;
    }
  } else {
    if (lastOption < firstOption) {
      return -1;
    }
    if (lastOption > firstOption) {
      return 1;
    }
  }
  return 0;
};
