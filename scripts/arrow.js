const person = {
  firstName: "Grace",
  lastName: "Hopper",
  age: 89,
  // the error was : firstName and lastName is not defined in the person's lexical scope.
  // this happens only in the case of "arrow-functions"
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

let x = person.fullName();
console.log(x);
