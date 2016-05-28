function getMessage(a,b){
if(a == true) {
   return "Я попал в " + b;
}
if(a == false) {
return "Я никуда не попал";
}
if(typeof a =='number') {
return "Я прыгнул на " + a * 100 + " сантиметров";
}
var sum = 0;
if (typeof a =='object' && typeof b != 'object') {
  for (i in a) {
    sum += a[i];
  }
return "Я прошёл " + sum + " шагов";
}
var length=0;
if(typeof a == 'object' && typeof b == 'object') {
  for (i in a) {
    length += a[i]*b[i];
  }
return "Я прошёл " + length + " метров";
}
}
