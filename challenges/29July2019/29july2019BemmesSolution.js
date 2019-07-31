{
    let input = '#FFFFFF';
    let input2 = 'rgb(255,255,255)';
    let input3 = '#03AC15';
    let input4 = 'rgb(3,172,21)';
    let input5 = 'the pirates are trash';

    const convertColorCode = (input) => {
        let hexRegEx = new RegExp(/^#[0-9a-f]{6}/gi);
        let rgbRegEx = new RegExp(/^rgb\(\s*(?:(?:\d{1,2}|1\d\d|2(?:[0-4]\d|5[0-5]))\s*,?){3}\)$/gi);
        return hexRegEx.test(input) ? convertHexToRGB(input) : (rgbRegEx.test(input) ? convertRGBtoHex(input) : "Invalid input!");
    }

    const convertRGBtoHex = (input) => {
        let colors = input.replace(/[^\d,]/g, '').split(',');
        return "#" + ((1 << 24) + (parseInt(colors[0]) << 16) + (parseInt(colors[1]) << 8) + parseInt(colors[2])).toString(16).slice(1);
    }

    const convertHexToRGB = (input) => {
        input = input.replace('#','');
        let r = parseInt(input.substring(0,2), 16);
        let g = parseInt(input.substring(2,4), 16);
        let b = parseInt(input.substring(4,6), 16);
        return "rgb(" + r + ", " + g + ", " + b + ")"; 
    }

    console.log(convertColorCode(input));
    console.log(convertColorCode(input2));
    console.log(convertColorCode(input3));
    console.log(convertColorCode(input4));
    console.log(convertColorCode(input5));
}