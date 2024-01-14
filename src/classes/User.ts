import { faker } from '@faker-js/faker'
import { Mappable } from '../interfaces/Mappable'
// constants
import { CONTENT } from '../constants'

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string = 'red'

  constructor() {
    this.name = faker.person.firstName()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    }
  }

  markerContent(): string {
    return CONTENT.user(this.name)
  }
}
