import { User, Company, Mappy } from './classes'

const user = new User()
const company = new Company()
const mappy = new Mappy('map')

mappy.addMarker(user)
mappy.addMarker(company)
