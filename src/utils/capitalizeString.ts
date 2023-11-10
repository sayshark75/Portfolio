export const capitalizeString = (word: string): string => {
  if (typeof word !== "string" || word.length === 0) {
    return "";
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

// aBcDeF => Abcdef
