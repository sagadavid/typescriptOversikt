class Person {
  protected firstName: string;
  protected lastName: string;
  protected birthdate: Date;

  constructor(firstName: string, lastName: string, birthdate: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
  }

  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getBirhtDate(): Date {
    return this.birthdate;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setBirthDate(birthDate: Date) {
    this.birthdate = new Date();
  }
}

let personEin = new Person("erik", "schwarzkoff", new Date(1987 - 6 - 5));

// console.log(personEin.lastName);//private property cant be reached

personEin.setLastName("henriksen");
console.log(personEin.getLastName());

personEin.setBirthDate(new Date(1926 - 6 - 6));
console.log(personEin.getBirhtDate());

//inheritance

class Vehicle {
  protected brand: string = "";
  protected color: string;
  protected wheels: number;

  constructor(wheels: number, color: string) {
    this.color = color;
    this.wheels = wheels;
  }
  setColor(color: string) {
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }
}

class Automobil extends Vehicle {
  constructor(color: string, brand: string, wheels: string) {
    super(4, color);
    this.brand = brand;
  }
}

let vihecle1 = new Vehicle(2, "bro");
let auto1 = new Automobil("color", "bmw", "sesd");
console.log(auto1.getColor);

//abstract class
