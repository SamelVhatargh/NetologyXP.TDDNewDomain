"use strict";

class Controller {
    constructor(bus) {
        this._bus = bus;
    }

    reserveSeat() {
        this._bus.reservedSeatsCount++;
    }
}

module.exports = Controller;