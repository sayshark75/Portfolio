const limitString = (str = "", characters = 10): string => {
  if (str.length > characters) str = str.slice(0, characters) + "...";

  return str;
};

export default limitString;
