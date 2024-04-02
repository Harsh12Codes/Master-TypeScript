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

-   "?" can be put such that "class?:string" to make the class atribute optional

-   "&" can be used to combine the types of two classes.

### Arrays

-   arrays can be defined as simple as
    ": number[]" , "Array<number>".

-   an empty array can be defined as ":[]".

### Union Types

-   "|" can be used to make union of types or restrict the input to some specific values.

### Tuples

-   "[number ,string, number]" , this is tuple structure and now it enables us to specifically use number in 1st position of array then string and then number ,if it doesn't match it will gonna throw an error.

-   you can also push or use other array functions but just the data type mentioned in the tuples

### Enums

-   enums are fixed set of values that you can use for that type.

-   put const to reduce the produced javascript code from that typescript code

### Interfaces

-   interfaces are like classes of type
-   here you describe the structure of the class or variable with respect to type.

-   if you want to add more values to interface you can redefine the structure and add new values like

````
interface user {
    name : string,
}

interface user{
    isActive : boolean,
 }
 ```
````
