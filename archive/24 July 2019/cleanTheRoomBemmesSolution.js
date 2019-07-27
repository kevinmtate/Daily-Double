const input = [1,2,4,591,392,391,2,5,10,2,5,10,2,1,1,1,20,20];
// const input = [1,"2","3",2,2];
let output = [];

const bemmesCleanTheRoom = (input) => {
  let finalArray = [];
  let nums = input.filter(val => typeof(val) === 'number');
  let strings = input.filter(val => typeof(val) === 'string');

  nums.sort((a,b) => a-b);
  strings.sort((a,b) => a-b);

  let numsNew = Object.values(getGroups(nums)).map(element => (element.length > 1 ? element: element[0]));
  let stringsNew = Object.values(getGroups(strings)).map(element => (element.length > 1 ? element : element[0]));

  if (numsNew.length){ finalArray.push(numsNew); }
  if (stringsNew.length){ finalArray.push(stringsNew); }

  return finalArray;
}

const getGroups = (input) => {
  retArr = {};
  input.forEach(element => {
    if (!retArr[element]) {
      retArr[element] = [element];
    } else {
      retArr[element] = [...retArr[element], element];
    }
  });
  return retArr;
}

output = bemmesCleanTheRoom(input);
console.log(output);
