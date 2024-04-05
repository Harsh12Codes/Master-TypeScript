class UserMain {
    protected _courseCount = 1;

    readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string, // private userId: string
    ) {}
    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends UserMain {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4; // if we use private then we can't access it
    }
}

const harshMain = new UserMain("harsh12codes@gmail.com", "harsh");
