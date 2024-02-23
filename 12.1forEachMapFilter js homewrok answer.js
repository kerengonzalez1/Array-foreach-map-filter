// forEach

const doubleValues = arr => {
    let newArr = [];
    arr.forEach(val => newArr.push(val * 2));
    return newArr;
  };
  
  const onlyEvenValues = arr => {
    let newArr = [];
    arr.forEach(val => {
      if (val % 2 === 0) newArr.push(val);
    });
    return newArr;
  };
  
  const showFirstAndLast = arr => {
    let newArr = [];
    arr.forEach(val => newArr.push(val[0] + val[val.length - 1]));
    return newArr;
  };
  
  const addKeyAndValue = (arr, key, value) => {
    arr.forEach(val => (val[key] = value));
    return arr;
  };
  
  const vowelCount = str => {
    let obj = {};
    const vowels = "aeiou";
  
    str.split("").forEach(letter => {
      const lowerCasedLetter = letter.toLowerCase();
      if (vowels.includes(lowerCasedLetter)) {
        obj[lowerCasedLetter] = (obj[lowerCasedLetter] || 0) + 1;
      }
    });
    return obj;
  };
  
  // map
  
  const doubleValuesWithMap = arr => arr.map(val => val * 2);
  
  const valTimesIndex = arr => arr.map((val, idx) => val * idx);
  
  const extractKey = (arr, key) => arr.map(val => val[key]);
  
  const extractFullName = arr => arr.map(val => `${val.first} ${val.last}`);
  
  // filter
  
  const filterByValue = (arr, key) => arr.filter(val => val[key] !== undefined);
  
  const find = (arr, searchValue) => arr.filter(val => val === searchValue)[0];
  
  const findInObj = (arr, key, searchValue) => arr.filter(val => val[key] === searchValue)[0];
  
  const removeVowels = str => str.toLowerCase().split("").filter(val => !"aeiou".includes(val)).join("");
  
  const doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);
  