export class Employee {
    readonly name: string;
    readonly email: string;
    readonly addressLine1: string;
    readonly addressLine2: string;
    readonly city: string;
    readonly zipCode: string;
    readonly hiringDate: string;
    readonly jobTitle: string;

    constructor(name: string, email: string, addressLine1: string, addressLine2: string, city: string, zipCode: string, hiringDate: string, jobTitle: string) {
        this.name = name;
        this.email = email;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.zipCode = zipCode;
        this.hiringDate = hiringDate;
        this.jobTitle = jobTitle;
    }
}