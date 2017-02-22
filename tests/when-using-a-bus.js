"use strict";
let assert = require('chai').assert;
var Passenger = require('../src/bus/passenger');
var Controller = require('../src/bus/controller');
var Bus = require('../src/bus/bus');

suite('when using a bus', function () {
    let halfEmptyBus = {};
    let fullBus = {};
    let me = {};
    let halfEmptyBusController = {};
    let fullBusController = {};

    setup(function () {
        halfEmptyBus = new Bus(10);
        halfEmptyBus.reservedSeatsCount = 5;
        halfEmptyBusController = new Controller(halfEmptyBus);

        fullBus = new Bus(10);
        fullBus.reservedSeatsCount = 10;
        fullBusController = new Controller(fullBus);

        me = new Passenger(200);
    });

    test('controller gives me a ticket after I pay for it', function() {
        me.buyTicketFrom(halfEmptyBusController);

        assert.equal(me.haveTicket, true);
    });

    test('controller cant give me a ticket if there are no seats left', function() {
        me.buyTicketFrom(fullBusController);

        assert.equal(me.haveTicket, false);
    });


    test('bus seat is reserved after I get ticket', function () {
        let previousReservedSeatsCount = halfEmptyBus.reservedSeatsCount;

        me.buyTicketFrom(halfEmptyBusController);

        assert.equal(halfEmptyBus.reservedSeatsCount, previousReservedSeatsCount + 1);
    });

    test('bus is not ready to go if there are empty seats left', function () {

        let isReadyToGo = halfEmptyBus.checkIfReadyToGo();

        assert.equal(isReadyToGo, false);
    });

    test('bus is ready to go if there are no empty seats left', function () {

        let isReadyToGo = fullBus.checkIfReadyToGo();

        assert.equal(isReadyToGo, true);
    });

    test('my money is reduced by tickets price after I pay for ticket', function () {
        let previousMoneyCount = me.moneyCount;

        me.buyTicketFrom(halfEmptyBusController);

        assert.equal(me.moneyCount, previousMoneyCount - halfEmptyBusController.ticketPrice);
    })
});