export const shortenString = (str: string, maxLen = 10) => {
  if (str.length <= maxLen) return str;
  return `${str.slice(0, maxLen - 3)}...`;
};
