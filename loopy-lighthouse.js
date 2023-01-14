var start = 100;
var end = 200;
for (var j = start; j < end + 1; j++) {
  if ((j % 3 === 0) && (j % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (j % 3 === 0) {
    console.log("Loopy");
  } else if (j % 4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(j);
  }
}
