import { faker } from "@faker-js/faker";

export class randomDataUtil{
    
    static getFullName(){
        return faker.person.fullName();
    }

    static getEmail(){
        return faker.internet.email();
    }

    static getPhone(){
        return faker.phone.number({style:'mobile'});
    }

    static getAddress(){
        return faker.location.streetAddress(true);
    }

    static getRandomValue<T>(arr: T[]): T | undefined {

        if (arr.length === 0) {
            return undefined;
        }
        return arr[faker.number.int({min:0, max:arr.length-1})];
    };

    static getRandomValues<T>(arr: T[]): Set<T> | undefined {

        if (arr.length === 0) {
            return undefined;
        }
        const count = faker.number.int({min:2, max:arr.length-1});
        let outputSet = new Set<T>;
        for(let i=1; i<=count; i++){
            let index = faker.number.int({min:0, max:arr.length-1})
            if(!outputSet.has(arr[index])){
                outputSet.add(arr[index]);
            } 
        }
        return outputSet;
    };
}