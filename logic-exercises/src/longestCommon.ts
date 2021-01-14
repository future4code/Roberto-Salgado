export const longestCommon = (strs: string[]): string => {
  let commonPrefix = "";
  
  if(strs === null || strs.length === 0) return commonPrefix;
  
  for(let i = 0; i < strs[0].length; i++) {
    const currentChar = strs[0][i];
    
    for(let j = 0; j < strs.length; j++) {
      if(strs[j][i] !== currentChar) return commonPrefix;
    }
    
    commonPrefix += currentChar;
  }
  
  return commonPrefix;
};