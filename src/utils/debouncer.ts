export const debouncer = (
  callback: () => unknown,
  delay: number
): (() => void) => {
  let id: number;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};
