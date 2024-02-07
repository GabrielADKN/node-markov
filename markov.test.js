
const markov = require('./markov');

describe('MarkovMachine', function () {
    test('makeChains', function () {
        let mm = new markov.MarkovMachine('the cat in the hat');
        expect(mm.chains).toEqual(new Map([
        ["the", ["cat", "hat"]],
        ["cat", ["in"]],
        ["in", ["the"]],
        ["hat", [null]]
        ]));
    });
    
    test('makeText', function () {
        let mm = new markov.MarkovMachine('the cat in the hat');
        let text = mm.makeText();
        let words = text.split(/[ \r\n]+/);
        expect(words.length).toBe(100);
    });
    });

