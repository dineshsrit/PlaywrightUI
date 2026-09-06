import { Customer } from "./Usercreation.type";
import { faker } from "@faker-js/faker";

export function customerInfo():Customer{
    return{
     fullname: faker.person.fullName(),
     email:faker.internet.email(),
     password:"test@1234"
    }
}

