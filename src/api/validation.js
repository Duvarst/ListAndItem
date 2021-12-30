export const req = {
  valTitle: /[a-z]{3,}/gi,
  valDescr: /<|>|[\]|[|]|[/]|;|=/g,

  reqTest(str, subStr) {
    const regExp = new RegExp(subStr);
    return regExp.test(str);
  },
  reqMatch(str, subStr) {
    return str.match(subStr);
  },
  reqReplace(str, originVal, newVal) {
    return str.replace(originVal, newVal);
  },
};
