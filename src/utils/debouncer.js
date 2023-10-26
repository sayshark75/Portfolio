export const debouncer = (callback, delay) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};
