// #TODO Import fakerjs
import faker from "faker"
import { CATHEGORIES } from "./constants"


export default {
  [faker.datatype.uuid()]: {
    author: faker.internet.userName(),
    publishedDate: faker.date.past(),
    lastChangeDate: null,
    header: faker.lorem.sentence(),
    cathegory: faker.random.arrayElement(CATHEGORIES),
    body: faker.lorem.paragraphs()
  }
}
