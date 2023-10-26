export const capitalizeString = (word) => {
  if (typeof word !== "string" || word.length === 0) {
    return "User";
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

// aBcDeF => Abcdef
