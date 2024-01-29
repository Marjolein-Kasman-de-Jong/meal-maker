// Menu object
const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof (mealToCheck) === 'string') {
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof (priceToCheck) === 'number') {
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for \$${this._price}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
}

// Sets special and logs it to the console
function getRandomSpecial() {
    // Set array of specials
    const arrayOfMealsAndPrices = [['pizza', 5], ['soup', 3], ['salad', 4.50], ['burrito', 5.25]];
    // Get a random number
    const randomNumber = Math.floor(Math.random() * 4);
    // Set specials
    menu.meal = arrayOfMealsAndPrices[randomNumber][0];
    menu.price = arrayOfMealsAndPrices[randomNumber][1];
    // Log special to the console
    console.log(menu.todaysSpecial);
}

getRandomSpecial();