class Parking {
    capacity = 0;
    vehicles = [];
    constructor(capacity) {
        this.capacity = capacity;
    }
    addCar(carModel, carNumber) {
        if (this.capacity <= 0) {
            throw new error('Not enough parking space.');
        } else {
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false
            })
            console.log(`The ${carModel}, with a registration number ${carNumber}, parked.`);
            this.capacity = this.capacity - 1;
        }
    }
    removeCar(carNumber) {
        let findedCar = {}
        if (this.vehicles.some(e => e.carNumber === carNumber)) {
            this.vehicles.some(e => {
                if (e.carNumber === carNumber) {
                    findedCar = e;
                }
            })
        } else {
            throw new error("The car, you're looking for, is not found.");

        }
        if (findedCar.payed === false) {
            throw new error(`${findedCar.carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles.splice(this.vehicles.indexOf(findedCar), 1)
            this.capacity++;
            return `${findedCar.carNumber} left the parking lot.`
        }
    }
    pay(carNumber) {
        let findedCar = {}
        if (this.vehicles.some(e => e.carNumber === carNumber)) {
            this.vehicles.some(e => {
                if (e.carNumber === carNumber) {
                    findedCar = e;
                }
            })
        } else {
            throw new error(`${carNumber} is not in the parking lot.`);
        }
        if (findedCar.payed === true) {
            throw new error(`${findedCar.carNumber}'s driver has already payed his ticket.`);
        } else {
            let index = this.vehicles.indexOf(findedCar)
            this.vehicles[index].payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }
    getStatistics(carNumber) {
        if (typeof carNumber == 'undefined') {
            console.log(`The Parking Lot has ${ this.capacity } empty spots left.`);
            this.vehicles.sort((a, b) => {
                if (a.carModel < b.carModel) {
                    return -1;
                }
                if (a.carModel > b.carModel) {
                    return 1;
                }
                return 0;
            })
            this.vehicles.forEach((e) => {
                let hasPayed;
                if (e.payed == false) {
                    hasPayed = 'Has payed'
                } else {
                    hasPayed = 'Not payed'
                }
                console.log(`${e.carModel} == ${e.carNumber} - ${hasPayed}`);
            })
        } else {
            let hasPayed;
            let findedCar = {}
            if (this.vehicles.some(e => e.carNumber === carNumber)) {
                this.vehicles.some(e => {
                    if (e.carNumber === carNumber) {
                        findedCar = e;
                    }
                })
            }
            let index = this.vehicles.indexOf(findedCar)
            if (this.vehicles[index].payed == false) {
                hasPayed = 'Has payed'
            } else {
                hasPayed = 'Not payed'
            }
            console.log(`${this.vehicles[index].carModel} == ${this.vehicles[index].carNumber} - ${hasPayed}`);
        }
    }

}

const parkinh = new Parking(2);
parkinh.addCar('aasdfd', 'asfddgd');
parkinh.addCar('aasdf', 'asfddg');
parkinh.pay('asfddg')
parkinh.getStatistics()