const main = (input) => {
  if (input.substring(0,3) === 'rgb') {
    return convertRGBtoHex(input);
  } else if (input.length === 3 || input.length === 6) {
    return convertHexToRGB(input);
  } else {
    return "input not in correct format";
  }
}

const convertRGBtoHex = (input) => {

  const convertToHex = (array) => {
    return array.map(num => numberToLetter(Math.floor(num / 16)) + numberToLetter(num % 16))
                .join('');
  }

  const getRGBValues = (string) => {
    return string
          .substring(4, string.length-1)
          .split(',')
          .map(value => parseInt(value));
  }
  
  const numberToLetter = (num) => {
    switch (num) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
      default:
        return num.toString();
    }
  }

  return convertToHex(getRGBValues(input));
}

const convertHexToRGB = (input) => {

  const convertToRGB = (input) => {
    let array = [];

    for (let i = 0; i < input.length; i += 2) {
      const firstVal = input[i];
      const secondVal = input[i];
      array.push(charToNumber(firstVal) * 16 + charToNumber(secondVal));
    }

    return `rgb(${array.join(',')})`;
  }

  const charToNumber = (char) => {
    switch (char) {
      case "A":
        return 10;
      case "B":
        return 11;
      case "C":
        return 12;
      case "D":
        return 13;
      case "E":
        return 14;
      case "F":
        return 15;
      default:
        return parseInt(char);
    }
  }

  return convertToRGB(input);
}

const rgbInput = "rgb(182,205,35)";
const hexInput = "B6CD23"

console.log(main(rgbInput));
console.log(main(hexInput));
