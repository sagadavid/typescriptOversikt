function displayFullName(worker) {
    return "".concat(worker.birthDate, " ").concat(worker.lastName, " ").concat(worker.firstName);
}
var selger = {
    firstName: "hans",
    lastName: "konkordato",
    birthDate: new Date("1982-08-22"),
};
console.log(displayFullName(selger));
