'use strict';

var expect = require('chai').expect;
var gridArrangement = require('../index');

describe('#gridArrangement', function() {
    it('should fit items into to rows and two columns', function() {
        var result = gridArrangement(100, 100, 4, 1);
        expect(result.row).to.equal(2);
        expect(result.col).to.equal(2);
        expect(result.w).to.equal(50);
        expect(result.h).to.equal(50);
    });
    it('should fit items into to five rows and two columns', function() {
        var result = gridArrangement(100, 100, 10, 2.5);
        expect(result.row).to.equal(5);
        expect(result.col).to.equal(2);
        expect(result.w).to.equal(50);
        expect(result.h).to.equal(20);
    });
    it('should deal with decimals if the decrement is set smaller than 1.', function() {
        var result = gridArrangement(1, 1, 10, 2.5, {d: 0.01});
        expect(result.row).to.equal(5);
        expect(result.col).to.equal(2);
        expect(result.w).to.equal(.5);
        expect(result.h).to.equal(.2);
    });
    it('should include margins in the calaulation.', function() {
        var result = gridArrangement(500, 1000, 5, 1.75, {m: {l:100, r: 50, t: 0, b: 0}});
        expect(result.row).to.equal(5);
        expect(result.col).to.equal(1);
        expect(result.w).to.equal(350);
        expect(result.h).to.equal(200);
    });
});
