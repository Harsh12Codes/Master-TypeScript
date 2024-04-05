interface Employee {
    readonly EmployeeId: number;
    email: string;
    googleId?: string;
    getCoupon(couponname: string, value: number): number;
}

interface Employee {
    githubUsername: string;
}

interface Company extends Employee {
    role: "frontend developer" | "backend developer";
}

const harsh12codes: Company = {
    email: "harsh12codes@gmail.com",
    EmployeeId : 112,
    role: "frontend developer",
    githubUsername: "harsh12codes",
    getCoupon: (name: "NEWEMPLOYEE", off: 10) => {
        return 10;
    },
};
harsh12codes.email = "h@gmail.com";



// major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.