"use strict";
let assert = require('chai').assert;
var Passenger = require('../src/bus/passenger');
var Controller = require('../src/bus/controller');
var Bus = require('../src/bus/bus');

suite('when using a bus', function () {
    let halfEmptyBus = {};
    let me = {};
    let controller = {};

    setup(function () {
        halfEmptyBus = new Bus(10);
        halfEmptyBus.reservedSeatsCount = 5;
        controller = new Controller(halfEmptyBus);
        me = new Passenger();
    });

    test('controller gives me a ticket after I pay for it', function() {
        me.buyTicketFrom(controller);

        assert.equal(me.haveTicket, true);
    });

    test('bus seat is reserved after I get ticket', function () {
        let previousReservedSeatsCount = halfEmptyBus.reservedSeatsCount;

        me.buyTicketFrom(controller);

        assert.equal(halfEmptyBus.reservedSeatsCount, previousReservedSeatsCount + 1);
    });

    test('bus is not ready to go if there are empty seats left', function () {

        let isReadyToGo = halfEmptyBus.checkIfReadyToGo();

        assert.equal(isReadyToGo, false);
    });

    test('bus is ready to go if there are no empty seats left', function () {
        let fullBus = new Bus(10);
        fullBus.reservedSeatsCount = 10;

        let isReadyToGo = fullBus.checkIfReadyToGo();

        assert.equal(isReadyToGo, true);
    });
});