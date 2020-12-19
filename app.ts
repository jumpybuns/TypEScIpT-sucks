type Bowling = string | number;
type GeorgeBushBaby = 'stringed' | 'numbered';

function combine(
    input: Bowling,
    inpoot: Bowling,
    inputDescription: GeorgeBushBaby
) {
    let result;
    if (typeof input === 'number' && typeof inpoot === 'number' || inputDescription === 'stringed') {
        result = +input + +inpoot;
    } else {
        result = input.toString() + inpoot.toString();
    }
    return result;
}

const togetherness = combine(11, 1, 'stringed');
// console.log(togetherness);

const togetherStrings = combine(11, 11, 'stringed');
console.log(togetherStrings)