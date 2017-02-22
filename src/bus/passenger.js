"use strict";

class Passenger {
    constructor(moneyCount) {
        this._moneyCount = moneyCount;
        this._haveTicket = false;
    }
    buyTicketFrom(controller) {
        this._haveTicket = controller.reserveSeat();
        this._moneyCount = this._moneyCount - controller.ticketPrice;
    }

    get haveTicket() {
        return this._haveTicket;
    }

    get moneyCount() {
        return this._moneyCount;
    }
}

module.exports = Passenger;