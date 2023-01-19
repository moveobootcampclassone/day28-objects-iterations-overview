"use strict";

const person = {
  name: "John",
  age: 25,
  place: "Israel",
};

//8
const sort = (obj) => {
  let objKeys = Object.keys(obj); //["name", "age", "place"]
  objKeys.sort(); //["age","name","place"]
  let sortedObj = {};
  for (let key of objKeys) {
    console.log(obj[key], "obj[key]");
    // key = age => value = 30
    sortedObj[key] = obj[key];
  }
  return sortedObj;
};
console.log(sort(person), "sort(person)");

//19
const words = [
  "happy",
  "good",
  "happy",
  "nice",
  "like",
  "happy",
  "good",
  "like",
  "good",
];

const wordFrequency = (arr) => {
  let wordCount = {};
  for (let x of arr) {
    if (wordCount.hasOwnProperty(x)) {
      wordCount[x]++;
    } else {
      wordCount[x] = 1;
    }
    //OR:
    //if there is no matching key: wordCount[x]; // undefined
    // if (wordCount[x]) {
    //   wordCount[x]++;
    // } else {
    //   wordCount[x] = 1;
    // }
    //OR:
    // if (!wordCount.hasOwnProperty(x)) {
    //   wordCount[x] = 1;
    // } else {
    //   wordCount[x]++;
    // }
  }
  return wordCount;
};

console.log(wordFrequency(words));
