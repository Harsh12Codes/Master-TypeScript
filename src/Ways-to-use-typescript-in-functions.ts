function getUpper(val: string) {
    return val.toUpperCase(); //can only use string methods as it is string
}

function increment(n: number): number {
    // Normal function
    return n + 1;
}

let incrementArrow = (n: number): number => {
    // Arrow function
    return n + 1;
};

const value2 = [1, 2, 3, 4, 5];

value2.map((x): number => {
    return x.toString(); // error: we are expecting number but returning string
});
