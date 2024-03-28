let passport = {
    name: "Petr",
    surname: "Petrov",
};

let ivanPassport = {};

for (let key in passport) {
    ivanPassport[key] = passport[key];
}

ivanPassport.name = "Ivan";
 
console.log(passport.name);
console.log(ivanPassport.name);