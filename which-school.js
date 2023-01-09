const whichSchool = function(age){
  if(age >= 1 && age < 13)
{
    return "Elementary School";
  }
  else if(age >= 13 || age <= 18)
{
    return"Secondary School";
  }
}
console.log(whichSchool(16));



