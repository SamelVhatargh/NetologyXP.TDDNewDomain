"use strict";

class Bus {
    constructor() {
        this._reservedSeatsCount = 0;
    }
    get reservedSeatsCount() {
        return this._reservedSeatsCount;
    }
    set reservedSeatsCount(value) {
        this._reservedSeatsCount = value;
    }
    checkIfReadyToGo() {
        return false;
    }
}

module.exports = Bus;