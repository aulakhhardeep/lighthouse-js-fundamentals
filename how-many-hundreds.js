const howManyHundreds = function(num)
{
  return ((num / 100)) - ((num % 100)) / 100;
}

console.log(howManyHundreds(1000));