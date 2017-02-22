"use strict";

class Controller {
    constructor(bus) {
        this._bus = bus;
    }

    reserveSeat() {
        if (this._bus.reservedSeatsCount + 1 >= this._bus._maxSeatsCount) {
            return false;
        }
        this._bus.reservedSeatsCount++;
        return true;
    }
}

module.exports = Controller;