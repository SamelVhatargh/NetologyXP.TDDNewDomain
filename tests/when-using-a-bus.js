"use strict";
let assert = require('chai').assert;
var Passenger = require('../src/bus/passenger');
var Controller = require('../src/bus/controller');
var Bus = require('../src/bus/bus');

suite('when using a bus', function () {
    let bus = {};
    let me = {};
    let controller = {};

    setup(function () {
        bus = new Bus();
        controller = new Controller(bus);
        me = new Passenger();
    });

    test('controller gives me a ticket after I pay for it', function() {
        me.buyTicketFrom(controller);

        assert.equal(me.haveTicket, true);
    });

    test('bus seat is reserved after I get ticket', function () {
        let previousReservedSeatsCount = bus.reservedSeatsCount;

        me.buyTicketFrom(controller);

        assert.equal(bus.reservedSeatsCount, previousReservedSeatsCount + 1);
    });

    test('bus is not ready to go if there are empty seats left', function () {

        let isReadyToGo = bus.checkIfReadyToGo();

        assert.equal(isReadyToGo, false);
    });
});