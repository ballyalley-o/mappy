import { faker } from '@faker-js/faker'
import { Mappable } from '../interfaces/Mappable'
// constants
import { CONTENT } from '../constants'

export class Company implements Mappable {
  companyName: string
  description: string
  location: {
    lat: number
    lng: number
  }
  color: string = 'blue'

  constructor() {
    this.companyName = faker.company.name()
    this.description = faker.company.catchPhrase()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    }
  }

  markerContent(): string {
    return CONTENT.company(this.companyName, this.description)
  }
}
