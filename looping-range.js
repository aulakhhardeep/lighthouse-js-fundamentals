const range = function (start, end, step) {
  let newArray = [];
  if(start === undefined || end === undefined || step === undefined || step <= 0 || step < 0 || start > end) {
   return newArray;
 }
 else {
  for (let i = start; i <= end; i += step) {
    newArray.push(i);
  }
 }
 return newArray;
}
console.log(range(0, 10, 2));
console.log(range(10,30,5));
console.log(range(-5, 2,3));