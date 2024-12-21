function isAlpha(value) {
    return /^[a-z]*$/i.test(value);
}

console.log(isAlpha("Hello")); // True
console.log(isAlpha("")); // True
console.log(isAlpha("1234")); // False