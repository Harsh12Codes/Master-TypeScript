type school = {
    name: string;
    location: string;
    age: number;
    isPrivate: boolean;
};

let school1: school = {
    name: "St. Joseph",
    location: "Earth",
    age: 100,
    isPrivate: true,
};

console.log(school1);

type User = {
    readonly _id: string; // using readonly to make it non-modifiable
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number; // attribute is optional
};

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
};

type cardNumber = {
    cardnumber: string;
};

type cardDate = {
    cardDate: string;
};

//combining two types + adding new property

type cardDetails = cardNumber & cardDate & { cvv: number };
