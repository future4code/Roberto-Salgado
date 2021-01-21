export const isAnagram = (s: string, t: string): boolean => {
  s = s.replace(/[^\w]/g, "").toLowerCase();
  t = t.replace(/[^\w]/g, "").toLowerCase();

  if (s.length !== t.length) return false;

  const charMapS: charMap = getCharMap(s);
  const charMapT: charMap = getCharMap(t);

  for (let char in charMapS) {
    if (charMapS[char] !== charMapT[char]) {
      return false;
    }
  }

  return true;
};

const getCharMap = (str: string): charMap => {
  let charMap: charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

interface charMap {
  [index: string]: number;
}