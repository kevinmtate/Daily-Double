{
    const input = [1,2,3];
    const target = 4;

    const answer = (input, target) => {
        for (let i = 0; i < input.length; i++) {
        let num = target - input[i];
        if (input.includes(num)) { return [input[i],num]; }
        }
        return "there are none";
    }
  
    console.log(answer(input, target));
}