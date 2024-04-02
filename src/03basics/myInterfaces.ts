interface PersonX {
    name: string;
    age: number;
    startTrial?: boolean;
    trailMethod?: () => void; //or trailMethod?(): void;
}
let personx: PersonX = {
    name: "John",
    age: 30,
    startTrial: true,
    trailMethod: () => {
        console.log("Trial method");
    },
};

personx.trailMethod?.(); // Using the nullish coalescing operator to check if trailMethod is defined before invoking it.

interface PersonX {
    github?: string;
}

let personx2: PersonX = {
    name: "John",
    age: 30,
    startTrial: true,
    github: "john-doe",
};

console.log(personx2.github);
