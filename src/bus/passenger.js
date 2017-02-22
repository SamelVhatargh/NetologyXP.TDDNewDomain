"use strict";

class Passenger {
    buyTicketFrom(controller) {
        controller.reserveSeat();
    }

    get haveTicket() {
        return true;
    }
}

module.exports = Passenger;