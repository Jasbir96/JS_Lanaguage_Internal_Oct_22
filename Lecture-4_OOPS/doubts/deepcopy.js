let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    movies: [[{ key: "Die hard" }], "First Avenger"]
};
// []
let superClone = (object) => {
    let isArr = Array.isArray(object);
    let cloning = isArr ? [] : {};
    // [fn,lastName,address]
    Object.keys(object).map((prop) => {
        if (Array.isArray(object[prop])) {
            cloning[prop] = [...object[prop]];
            for (let i = 0; i < cloning[prop].length; i++) {
                if (cloning[prop][i] == "object") {
                    cloning[prop][i] = superClone(object[prop][i]);
                }
            }
            // array -> objects -> super clone 
        } else if (typeof object[prop] === "object") {
            cloning[prop] = superClone(object[prop]);
        } else {
            cloning[prop] = object[prop];
        }
    });
    return cloning;
};

// -> simple obj -> primitive
// -> obj -> primitives ,objects,
// -> simple arrays -> containing -> non primitive
//  arrays -> complex types
// if (Array.isArray(object[prop])) {
//     cloning[prop] = [...object[prop]];
//     for (let i = 0; i < cloning[prop].length; i++) {
//         if (cloning[prop][i] == "object") {
//             cloning[prop][i] = superClone(object[prop][i]);
//         }
//     }

console.log(Number(123).toString()) 