
// 1
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 1000);

// 2

var person = {
    firstName:"Jane",
    lastName:"Doe",
    birthDate:"Jan 5, 1925",
    gender: "female"
};

// 3

console.log(Object.keys(person));

// 4

console.log(Object.entries(person));

// 5

let arrayOfPersons = [
    {
        firstName:"Jane",
        lastName:"Doe",
        birthDate:"Jan 5, 1925",
        gender: "female"
    },

    {
        firstName:"Pete",
        lastName:"Mac",
        birthDate:"May 6, 1934",
        gender: "male"
    },

    {
        firstName:"Roger",
        lastName:"Regor",
        birthDate:"April 1, 1999",
        gender: "male"
    },

    {
        firstName:"Kathy",
        lastName:"McDonald",
        birthDate:"December 12, 2001",
        gender: "female"
    }
]

// 6

for (let person of arrayOfPersons) {
    let year = Number(person.birthDate.slice(-4))
    if((year %2 !== 0)){
        console.log(person.firstName, ":", year);
    }
}

//7

let people = arrayOfPersons.map(person => {
    let x = person
    console.log(x);
})

// 8

let isMale = arrayOfPersons.filter(person => person.gender === "male");
console.log("This person is a ", isMale);

// 9

let isOld = arrayOfPersons.map(person => {
    const birthYear = Number(person.birthDate.slice(-4));
    if(birthYear < 1990){
        console.log(person.firstName, "is old.");
    } else {
    console.log(person.firstName, "is not old.");
}});

// 10

let boomers = arrayOfPersons.filter(person => person.birthDate.slice(-4) < 1990);

console.log(boomers);


