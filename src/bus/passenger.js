"use strict";

class Passenger {
    constructor(moneyCount) {
        this._moneyCount = moneyCount;
        this._haveTicket = false;
        this._hasDisability = false;
    }
    buyTicketFrom(controller) {
        this._haveTicket = controller.reserveSeat();
        if (!this.hasDisability()) {
            this._moneyCount = this._moneyCount - controller.ticketPrice;
        }
    }

    breakLeg() {
        this._hasDisability = true;
    }

    get haveTicket() {
        return this._haveTicket;
    }

    get moneyCount() {
        return this._moneyCount;
    }

    hasDisability() {
        return this._hasDisability;
    }
}

module.exports = Passenger;