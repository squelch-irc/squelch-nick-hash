import hashNick from '../src/index';
import Chance from 'chance';
import assert from 'assert';

const chance = new Chance(0);

describe('hashNick', () => {
    it('should return index between 1 and 16', () => {
        for(let i = 0; i < 10000; i++) {
            const nick = chance.name();
            const index = hashNick(nick);
            assert(index >= 1, 'Index is greater than or equal to 1.');
            assert(index <= 16, 'Index is less than or equal to 1.');

            const upperIndex = hashNick(nick.toUpperCase());
            assert(index === upperIndex, 'Hash returns same index for upper case name');

            const lowerIndex = hashNick(nick.toLowerCase());
            assert(index === lowerIndex, 'Hash returns same index for lower case name');
        }
    });
});
