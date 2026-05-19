//Clase evento que sera la base para la creacion de los diferentes objetos evento

class Event {
  constructor({ id, title, description, date, location, category, price, image }) {
    this.id = id
    this.title = title
    this.description = description
    this.date = date
    this.location = location
    this.category = category
    this.price = price
    this.image = image || ''
  }

  getSummary() {
    return `${this.title} - ${this.location}`
  }

  isFree() {
    return Number(this.price) === 0
  }

  getYear() {
    return this.date ? new Date(this.date).getFullYear() : null
  }
}

export default Event