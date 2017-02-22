"use strict";

class Controller {
    constructor(bus) {
        this._bus = bus;
    }

    reserveSeat() {
        if (this._bus.isFull()) {
            return false;
        }
        this._bus.reservedSeatsCount++;
        return true;
    }

    get ticketPrice() {
        return 100;
    }
}

module.exports = Controller;