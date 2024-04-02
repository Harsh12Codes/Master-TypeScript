function addTwo(num: number) {
    return num + 2;
}
console.log(addTwo(3));

function toUpper(str: string) {
    return str.toUpperCase();
}
console.log(toUpper("hello"));

function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(4));

const addThree = (num: number): number => num + 3;
console.log(addThree(5));

// errors

const consoleError = (message: string): void => {
    console.error(message);
};

const handleError = (message: string): never => {
    throw new Error(message);
};
