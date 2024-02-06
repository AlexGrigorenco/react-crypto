export const calculatePercentageDifference = (firstNumber, secondNumber) => {
    const difference = secondNumber - firstNumber;
    return +((difference / firstNumber) * 100).toFixed(2);
}

export function capitalise(str){
    return str.charAt(0).toUpperCase() + str.substring((1))
}
