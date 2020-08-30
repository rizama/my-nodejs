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

// new
const { name: myName, snack }= person
console.log(myName);
console.log(snack);