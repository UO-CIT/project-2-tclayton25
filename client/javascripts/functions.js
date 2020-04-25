// jshint esversion: 6

//Req. 3-A

let revWords1 = sentence => {
  let words = sentence.split("");
  let newSentence = " ";
  for (var i = 0; i < words.length; i++) {
    newSentence = words[i] + newSentence;
  }
  return newSentence;
};

//Req. 3-B

let revWords2 = sentence => {
  let words = sentence.split("");
  let newSentence = " ";
  words.forEach(function(word) {
    newSentence = word + newSentence;
  });
  return newSentence;
};

//Req. 3-C

let revWords3 = sentence => {
  let words = sentence.split("");
  let newSentence = " ";
  for (var element of words) {
    newSentence = element + newSentence;
  }

  return newSentence;
};

//Req. 5, XC
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
