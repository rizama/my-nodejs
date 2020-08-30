// {Object Distructuring}
const person = {
    name: 'Sam',
    snack: "Potatoes",
    cat: {
        name: "Hello"
    },
    drink: 'water'
}

// old ways
// const name = person.name
// const snack = person.snack

// new ways
const { 
    name: myName = 'Sul', 
    snack,
    cat,
    cat: {
        name
    },
    // jika object cat2 tidak ada dalam object utama, bisa dibuat default.
    // cat2: {
    //     name_
    // } = {
    //     name_: 'cat23'
    // }
}= person
console.log(myName);
console.log(snack);
console.log(name);

// [Array Destructuring]