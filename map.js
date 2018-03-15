var words = ["ground", "control", "to", "major", "tom"];

function map(array, callBack) {
  var output = [];


  array.forEach(function(element){

    output.push(callBack(element));

  });
  return output;
}


console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));