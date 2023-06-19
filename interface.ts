interface employee {
  firstName: string;
  lastName: string;
  birthDate: Date;
}

function displayFullName(worker: employee) {
  return `${worker.birthDate} ${worker.lastName} ${worker.firstName}`;
}

let selger: employee = {
  firstName: "hans",
  lastName: "konkordato",
  birthDate: new Date("1982-08-22"),
};

console.log(displayFullName(selger));
