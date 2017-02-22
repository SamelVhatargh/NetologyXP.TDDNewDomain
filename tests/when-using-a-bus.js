"use strict";
let assert = require('chai').assert;
var Passenger = require('../src/bus/passenger');
var Controller = require('../src/bus/controller');

suite('when using a bus', function () {
    test('controller gives me a ticket after I pay for it', function() {
        let me = new Passenger();
        let controller = new Controller();

        me.buyTicketFrom(controller);

        assert.equal(me.haveTicket, true);
    });
});