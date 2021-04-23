// JS is a fairly simple language to learn, as a lot of the 'under-the-hood' information is concealed from the developer


// 1. Syntax
let variable_name = 'some_value';
let another_variable_name = 'another_value';
let number_example = 203;

// 2. Variables
var first_variable = 1; // 'var' means that the variable is accessible from anywhere- whether it be inside or outside of an object or function. We try to not use this, and favor 'let'.
let second_vriable = 2; // 'let' means that the variable is only accessible from within an object or functions own scope. Both 'var' and 'let' can be reassigned values.
const third_variable = 3; // 'const' means that this variable cannot be reassigned to a new value. Try to use this as much as possible when you create variables whose values will not change.

// 3. Data types
// variable
let string = 'string';
let number = 1;
let boolean = true;
let Null = null;

// structures
let object = { type_example: "object" };
let array = ['value1', 2, true];

// functions
function example_1 () {
    let local_variable = 'local_variable';
    return local_variable;
}

const example_2 = () => {
    let local_variable = 'local_variable';
    return local_variable;
}

// async
const async_example = async () => {
    let long_number = 5**450;
    let local_variable = await long_number;
    return local_variable;
}

// promises
let myPromise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)
        const calculate = await async_example();
        resolve(calculate); // when successful
        reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
);