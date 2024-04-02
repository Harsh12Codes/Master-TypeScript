# Master-TypeScript

### Basics

-   Typescript is just javascript + type safety.
-   Typescript has static checking which helps to tell you that you did wrong as soon as you do something wrong.
-   more code for same functionality.
-   it is a wrapper around javascript.
-   it is a development tool basically.

<!-- Number -->

let userId:number = 334455

<!-- Syntax -->

let/const name:type = value;

-   typescript is smart enough to find that "let userId = 334455" is a number so there is not need to use :number on it.

-   it should be used when the future value of the variable is not determined.

-   in these cases typescript mark them as any basically don't apply the type-checking on these variable.

### Functions

-   to avoid using any we can put noImplicitAny in the tsconfig.json file.

-   use "never" for handleError and "void" for consoleError.

### Objects

-   "type" can be used to give aliases to the object.

-   "readonly" is put before the key in the object which you want that no one can change the value.

- "?" can be put such that "class?:string" to make the class atribute optional

- "&" can be used to combine the types of two classes.

### Arrays

- arrays can be defined as simple as 
  ": number[]" , "Array<number>".

- an empty array can be defined as ":[]".
