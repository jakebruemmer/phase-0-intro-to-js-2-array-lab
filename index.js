// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = function (name) {
  cats.push(name);
}

let destructivelyPrependCat = function (name) {
  cats.unshift(name);
}

let destructivelyRemoveLastCat = function () {
  cats.pop();
}

let destructivelyRemoveFirstCat = function () {
  cats.shift();
}

let appendCat = function (name) {
  return Array.prototype.concat(cats, name);
}

let prependCat = function (name) {
  return Array.prototype.concat(name, cats);
}

let removeLastCat = function () {
  return cats.slice(0, -1);
}

let removeFirstCat = function () {
  return cats.slice(1);
}