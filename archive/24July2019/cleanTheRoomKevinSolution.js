// CLEAN THE ROOM
const input1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const input2 = ["2","18",4,"3","2",1,2,"3",2,"3"];

function cleanTheRoom(input) {
  let numbArray = [];
  let stringArray = [];
  let combinedArray = [];

  const checkType = (element => {
    return typeof element === "number" ? numbArray : stringArray;
  });

  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length; i++) {
    if (input.slice(i+1).includes(input[i])) {
      let filteredArray = input.filter(el => el === input[i]);
      checkType(input[i]).push(filteredArray);
      i += filteredArray.length - 1;
    } else {
      checkType(input[i]).push(input[i]);
    }
  }
  combinedArray.push(numbArray);
  combinedArray.push(stringArray);
  return combinedArray;
}

console.log(cleanTheRoom(input1));
// [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]
console.log(cleanTheRoom(input2));
// [[1,[2,2],4],[["2","2"],["3","3","3"],"18"]]
