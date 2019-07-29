const input = [1,2,3];
const target = 4;

const answer = (input, target) => {
  let array = [];

  for (let i = 0; i < input.length; i++) {
    let num = target - input[i];
    if (input.indexOf(num) >= 0 && input.indexOf(num) !== i) {
      array.push(input[i]);
      array.push(num);
      return array;
    }
  }
  return "there are none";
}

console.log(answer(input, target));
