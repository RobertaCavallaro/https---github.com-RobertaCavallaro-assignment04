//STEP 1
function halfNumber(num) {
  var half = num / 2;
  console.log('half number of ' + num + ' is ' +  half);
  return half;
}
halfNumber(8);

//STEP 2
function squareNumber(num) {
  var squaredNumber = num * num;
  console.log('Result of number squared ' + num + ' is ' + squaredNumber);
  return squaredNumber;
}
squareNumber(6);

//STEP 3
function percentOf(num1, num2) {
  var percent = (num1/num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}

percentOf(30, 40);


//STEP 4
function more() {
  console.log(arguments);
  let sum = 1;
  for (let i = 1 < arguments.length; i++)
  sum += arguments [i];
}
return sum;


//STEP 5
function numbers(a, b){
  if (a>b){
    return a;
  }else if (a==b){
    return a;
  }else{
    return b;
  };
};
console.log(numbers(4,5));
