"use strict";

class Passenger {
    constructor() {
        this._haveTicket = false;
    }
    buyTicketFrom(controller) {
        this._haveTicket = controller.reserveSeat();
    }

    get haveTicket() {
        return this._haveTicket;
    }
}

module.exports = Passenger;