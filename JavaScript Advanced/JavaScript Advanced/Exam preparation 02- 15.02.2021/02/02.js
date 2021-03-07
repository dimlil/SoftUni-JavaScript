class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (this._budget < 0) {
            throw new Error('The budget cannot be a negative number')
        }
        this._budget = value;
    }
    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product')
        }
        this.budget -= price;
        this.products.push(type)
        return `You have successfully bought ${type}!`
    }
    /**
     * 
     * @param {{recipeName: string, productsList:Array<string>}} recipes 
     */
    recipes({
        recipeName,
        productsList
    }) {
        if (productsList.some(p => this.products.includes(p) == false)) {
            throw new Error('We do not have this product')
        }
        this.dishes.push({
            recipeName,
            productsList
        })
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error("We do not have this dish")
        } else if (this.guests.hasOwnProperty(name)) {
            throw new Error(`You have successfully invited ${name}!`)
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        let result = [];
        Object.entries(this.guests).forEach(([guestname, dish]) => {
            result.push(`${guestname} will eat ${dish}, which consists of ${this.dishes.find(d=>d.recipeName == dish).productsList.join(', ')}`);
        })
        return result.join('\n');
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
console.log(dinner.dishes);
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());