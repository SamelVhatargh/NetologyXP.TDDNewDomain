"use strict";

class Bus {
    constructor(maxSeatsCount) {
        this._maxSeatsCount = maxSeatsCount;
        this._reservedSeatsCount = 0;
    }
    get reservedSeatsCount() {
        return this._reservedSeatsCount;
    }
    set reservedSeatsCount(value) {
        this._reservedSeatsCount = value;
    }
    checkIfReadyToGo() {
        return this.isFull();
    }

    isFull() {
        return this._reservedSeatsCount >= this._maxSeatsCount;
    }
}

module.exports = Bus;