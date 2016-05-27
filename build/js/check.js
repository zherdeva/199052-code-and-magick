function getMessage(a,b){
if(a == true) {
   return "я попал в " + b;
}
if(a == false) {
return "Я никуда не попал";
}
if(typeof a =='number') {
return "Я прыгнул на" + a * 100 + " сантиметров";
}
var length=0;

var sum = 0;
if (typeof a =='object' && typeof b != 'object') {
  for (i in a) {
    sum += a[i];
  }
return "Я прошёл " + sum + " шагов";
}

if(typeof a == 'object' && typeof b == 'object') {
  for (i in a) {
    length += a[i]*b[i];
  }
return "Я прошёл " + length + " метров";
}
}
//boolean "Я попал в [b]"
//false "Я никуда не попал"
//number "Я прыгнул на [a] * 100 сантиметров"
//массив "Я прошёл [sum] шагов"
//а и б массив "Я прошёл [length] метров"
