import { faker } from '@faker-js/faker';

export class DadosFake {
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    name = this.firstName + ' ' + this.lastName;
    number = faker.datatype.number({ min: 10000 });
    key = this.firstName + '@' + this.number;

    email = this.firstName + this.lastName + '@fake.com.br';

    password = this.key.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

export default new DadosFake();
