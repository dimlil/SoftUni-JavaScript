class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.capacity == 0) {
            throw new error('Not enough parking space.');
        } else {
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false
            })
            this.capacity--;
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }
    removeCar(carNumber) {
        const carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);
        if (carIndex < 0) {
            throw new error("The car, you're looking for, is not found.");
        }
        if (!this.vehicles[carIndex].payed) {
            throw new error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.vehicles.splice(carIndex, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`
    }
    pay(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);
        if (!car) {
            throw new error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed) {
            throw new error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber) {
        if (!carNumber) {
            return [
                `The Parking Lot has ${ this.capacity } empty spots left.`,
                this.vehicles
                .sort((a, b) => a.carModel.localCompate(b.carModel))
                .map(car => {
                    `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : 'Not payed'}`
                })
                .join('\n')
            ].join('\n')
        }
        let car = this.vehicles.find(car => car.carNumber === carNumber);
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : 'Not payed'}`
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));