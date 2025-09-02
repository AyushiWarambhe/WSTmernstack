class Car {
    name
    brand
    doors
    wheels
    topSpeed
    fuelType

    constructor(name, brand, doors, wheels, topSpeed, fuelType) {
        this.name = name
        this.brand = brand
        this.doors = doors
        this.wheels = wheels
        this.topSpeed = topSpeed
        this.fuelType = fuelType
    }

    getInfo() {
        console.log("Car name: " + this.name)
        console.log("Brand: " + this.brand)
        console.log("Doors: " + this.doors)
        console.log("Wheels: " + this.wheels)
        console.log("Top Speed: " + this.topSpeed + " km/h")
        console.log("Fuel Type: " + this.fuelType)
    }

    start() {
        console.log(this.name + " is starting... 🚗💨")
    }

    stop() {
        console.log(this.name + " has stopped.")
    }

}

// Creating car objects
let car1 = new Car("Swift VXI", "Maruti Suzuki", 5, 4, 160, "Petrol")
let car2 = new Car("Honda City", "Honda", 4, 4, 180, "Petrol")
let car3 = new Car("Tata Nexon EV", "Tata", 5, 4, 150, "Electric")

// Using methods
car1.getInfo()
car1.start()
car1.stop()

console.log("-----------")

car2.getInfo()
car2.start()
car2.stop()

console.log("-----------")

car3.getInfo()

