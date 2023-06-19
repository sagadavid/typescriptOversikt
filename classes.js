var Person = /** @class */ (function () {
    function Person(firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getBirhtDate = function () {
        return this.birthdate;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.setBirthDate = function (birthDate) {
        this.birthdate = new Date();
    };
    return Person;
}());
var personEin = new Person("erik", "schwarzkoff", new Date(1987 - 6 - 5));
// console.log(personEin.lastName);//private property cant be reached
personEin.setLastName("henriksen");
console.log(personEin.getLastName());
personEin.setBirthDate(new Date(1926 - 6 - 6));
console.log(personEin.getBirhtDate());
