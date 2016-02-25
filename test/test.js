import hashNick from '../src/index';
import Chance from 'chance';
import assert from 'assert';

const chance = new Chance(0);

describe('hashNick', () => {
    it('should return index between 1 and 16', () => {
        for(let i = 0; i < 10000; i++) {
            var index = hashNick(chance.name());
            assert(index >= 1, 'Index is greater than or equal to 1.')
            assert(index <= 16, 'Index is less than or equal to 1.')
        }
    })
})
