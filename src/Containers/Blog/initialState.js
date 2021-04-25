import faker from "faker"
import { CATHEGORIES } from "./constants"
import uniqid from "uniqid"
import _reduce from "lodash/reduce"


const FAKE_FEED_LENGTH = 3

const createFakePost = _ =>
  _reduce(new Array(FAKE_FEED_LENGTH), (result, n) => {
    return({
      ...result,
        [uniqid()]: {
          author: faker.internet.userName(),
          publishedDate: Date.parse(faker.date.past()),
          lastChangeDate: null,
          header: faker.lorem.sentence(),
          cathegory: faker.random.arrayElement(CATHEGORIES),
          body: faker.lorem.paragraphs()
        }
      })
  }, {})


export default createFakePost()
