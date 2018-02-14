//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (!s || !s.length) return false;
  let i = 0;

  const lookSpace = i => i === ' ';
  const lookSign = i => i === '-' || i === '+';
  const lookDigital = i => i && i.charCodeAt(0) > 47 && i.charCodeAt(0) < 58;
  const lookDot = i => i === '.';
  const lookE = i => i === 'e' || i === 'E';

  while (lookSpace(s[i])) i++;
  if (i >= s.length) return false;
  let hasMinus = false;
  if (lookSign(s[i])) i++;

  while (lookDigital(s[i])) i++;

  if (lookDot(s[i])) {
    i++;
    if (lookDigital(s[i])) {
      while (lookDigital(s[i])) i++;
    } else if (lookE(s[i])) {
    } else if (lookSpace(s[i]) && lookDigital(s[i - 2])) {
      while (lookSpace(s[i])) i++;
      return i >= s.length;
    } else if (i >= s.length && lookDigital(s[[i - 2]])) {
      return true;
    } else {
      return false;
    }
  }
  if (lookE(s[i])) {
    if (!lookDot(s[i - 1]) && !lookDigital(s[i - 1])) {
      return false;
    }
    if (lookDot(s[i - 1]) && !lookDigital(s[i - 2])) {
      return false;
    }
    if (lookSign(s[i + 1])) i++;
    if (lookDigital(s[++i])) {
      while (lookDigital(s[i])) i++;
    } else {
      return false;
    }
  }
  while (lookSpace(s[i])) i++;

  return i >= s.length;
};

console.log(isNumber('') === false);
console.log(isNumber('  ') === false);
console.log(isNumber('0') === true);
console.log(isNumber('-0') === true);
console.log(isNumber(' 0.1 ') === true);
console.log(isNumber(' .1 ') === true);
console.log(isNumber('3.') === true);
console.log(isNumber(' . ') === false);
console.log(isNumber(' 0. ') === true);
console.log(isNumber(' -.1 ') === true);
console.log(isNumber(' -1. ') === true);
console.log(isNumber(' -1.0 ') === true);
console.log(isNumber(' -0. ') === true);
console.log(isNumber(' +.1 ') === true);
console.log(isNumber(' +1. ') === true);
console.log(isNumber(' +1.0 ') === true);
console.log(isNumber(' +0. ') === true);
console.log(isNumber('abc') === false);
console.log(isNumber('1 a') === false);
console.log(isNumber('2e10') === true);
console.log(isNumber('e10') === false);
console.log(isNumber('2e') === false);
console.log(isNumber('-2e10') === true);
console.log(isNumber('-e10') === false);
console.log(isNumber('46.e3') === true);
console.log(isNumber('-46.e3') === true);
console.log(isNumber('+.e3') === false);
console.log(isNumber('+.e') === false);
console.log(isNumber('.') === false);
console.log(isNumber('-.') === false);
console.log(isNumber(' 005047e+6') === true);
console.log(isNumber(' 005047e+') === false);
console.log(isNumber(' 005047e') === false);