function getMessage(a,b) {
if (typeof a === 'boolean') {
if (a) {
  return "Я попал в " + b;
} else {
return "Я никуда не попал";
}
}
if (typeof a === 'number') {
  return "Я прыгнул на " + a * 100 + " сантиметров";
}
var sum = 0;
if (typeof a === 'object'&& typeof b != 'object') {
  for (var i=0; i<a.length; i++) {
    sum += a[i];
  }
  return "Я прошёл " + sum + " шагов";
}
var length=0;
if (typeof a === 'object'&& typeof b === 'object') {
  for (var i=0; i<a.length; i++) {
    length += a[i]*b[i];
  }
  return "Я прошёл " + length + " метров";
}
}
