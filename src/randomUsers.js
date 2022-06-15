import { faker } from '@faker-js/faker';

export const USERS = [];

export function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});
