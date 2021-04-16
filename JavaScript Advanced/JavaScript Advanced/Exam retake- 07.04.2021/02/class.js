class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 0;
        this.singleRooms = 50 / 100 * capacity;
        this.doubleRooms = 30 / 100 * capacity;
        this.maisonetteRooms = 20 / 100 * capacity;
        // console.log(this.singleRooms);
        // console.log(this.doubleRooms);
        // console.log(this.maisonetteRooms);
    }
    get roomsPricings() {
        return { //price per night
            'single': 50,
            'double': 90,
            'maisonette': 135
        }
    }
    /**
     * 
     * @param {Sting} clientName 
     * @param {Sting} roomType 
     * @param {Number} nights 
     */
    rentARoom(clientName, roomType, nights) {
        if (this.singleRooms > 0 && roomType == 'single') {
            this.bookings.push({
                clientName,
                roomType,
                nights,
                rentalNumber: this.roomsPricings[roomType]
            });
            this.currentBookingNumber++;
            this.singleRooms = this.singleRooms - 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
        }
        if (this.doubleRooms > 0 && roomType == 'double') {
            this.bookings.push({
                clientName,
                roomType,
                nights,
                rentalNumber: this.roomsPricings[roomType]
            });
            this.currentBookingNumber++;
            this.doubleRooms = this.doubleRooms - 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
        }
        if (this.maisonetteRooms > 0 && roomType == 'maisonette') {
            this.bookings.push({
                clientName,
                roomType,
                nights,
                rentalNumber: this.roomsPricings[roomType]
            });
            this.currentBookingNumber++;
            this.maisonetteRooms = this.maisonetteRooms - 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
        }
        if (this.singleRooms <= 0 && roomType == 'single') {
            let result = `No ${roomType} rooms available!`
            if (this.doubleRooms > 0) {
                result += ` Available double rooms: ${this.doubleRooms}.`
            }
            if (this.maisonetteRooms > 0) {
                result += ` Available maisonette rooms: ${this.maisonetteRooms}.`
            }
            return result
        }
        if (this.doubleRooms <= 0 && roomType == 'double') {
            let result = `No ${roomType} rooms available!`
            if (this.singleRooms > 0) {
                result += ` Available single rooms: ${this.singleRooms}.`
            }
            if (this.maisonetteRooms > 0) {
                result += ` Available maisonette rooms: ${this.maisonetteRooms}.`
            }
            return result
        }
        if (this.maisonetteRooms <= 0 && roomType == 'maisonette') {
            let result = `No ${roomType} rooms available!`
            if (this.singleRooms > 0) {
                result += ` Available single rooms: ${this.singleRooms}.`
            }
            if (this.doubleRooms > 0) {
                result += ` Available double rooms: ${this.doubleRooms}.`
            }
            return result
        }

    }
    checkOut(currentBookingNumber) {
        // for (let i = 0; i < this.bookings.length; i++) {
        //     console.log(this.bookings[i]['clientName']);
        // }

        if (this.bookings[currentBookingNumber - 1] == undefined) {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        else {
            const currRoomType = this.bookings[currentBookingNumber - 1]['roomType']
            if (currRoomType == 'single') {
                this.singleRooms++;
            }
            if (currRoomType == 'double') {
                this.doubleRooms++;
            }
            if (currRoomType == 'maisonette') {
                this.maisonetteRooms++;
            }
            const totalMoney = Number(this.bookings[currentBookingNumber - 1]['nights']) * Number(this.bookings[currentBookingNumber - 1]['rentalNumber'])
            const name = this.bookings[currentBookingNumber - 1]['clientName'];
            // this.bookings=this.bookings.splice( currentBookingNumber - 1, currentBookingNumber);
            this.bookings.splice(currentBookingNumber - 1, 1);
            console.log(this.bookings);
            return `We hope you enjoyed your time here, Mr./Mrs. ${name}. The total amount of money you have to pay is ${totalMoney} BGN.`
        }
    }
    report() {
        let result = `${this.name.toUpperCase()} DATABASE:\n`;
        result += '--------------------\n'
        if (this.bookings.length > 0) {
            for (let i = 0; i < this.bookings.length; i++) {
                console.log(this.bookings);
                let booking = i + 1;
                result += `bookingNumber - ${booking}\n`
                result += `clientName - ${this.bookings[i]['clientName']}\n`
                result += `roomType - ${this.bookings[i]['roomType']}\n`
                result += `nights - ${this.bookings[i]['nights']}\n`
                result += "----------\n"
            }
            result=result.slice(0,-12)
        } else {
            result += 'There are currently no bookings.'
        }



        return result;
    }
}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
console.log(hotel.report());


