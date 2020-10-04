const {reverseAlphaOrder} = require('./PS1.P1');
const {evaluate} = require('./PS1.P2');
const {doOperation} = require('./PS1.P3');

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Testing Problem 1', () => {
    it('should return `xuutsssrrppoollliiiiiiigfeedcccaaa` when passed ‘supercalifragilisticexpialidocious’', () => {
        let test = reverseAlphaOrder("supercalifragilisticexpialidocious");
        expect(test).to.be.equal("xuutsssrrppoollliiiiiiigfeedcccaaa");
    })

    it('should return `vtsrrrrpoliheeeeedcbaa21` when passed ‘reverse1alphabetic2order’', () => {
        let test = reverseAlphaOrder("reverse1alphabetic2order");
        expect(test).to.be.equal("vtsrrrrpoliheeeeedcbaa21");
    })
})

describe('Testing Problem 2', () => {
    it('should return a function output to implement the input operator that returns 6 when passed ‘4+2’', () => {
        let operator = evaluate("4+2");
        expect(typeof(operator)).to.be.equal('function'); // check if it returns a function
        expect(operator()).to.be.equal(6);// check if the operator evaluate "4+2" with 6.
    })

    it('should return a function output to implement the input operator that returns 35 when passed ‘5*7’', () => {
        let operator = evaluate("5*7");
        expect(typeof(operator)).to.be.equal('function'); // check if it returns a function
        expect(operator()).to.be.equal(35);// check if the operator evaluate "5*7" with 35.
    })

    it('should return a function output to implement the input operator that returns 5 when passed ‘6-1’', () => {
        let operator = evaluate("6-1");
        expect(typeof(operator)).to.be.equal('function'); // check if it returns a function
        expect(operator()).to.be.equal(5);// check if the operator evaluate "6-1" with 5.
    })

    it('should return a function output to implement the input operator that returns 4.5 when passed ‘9/2’', () => {
        let operator = evaluate("9/2");
        expect(typeof(operator)).to.be.equal('function'); // check if it returns a function
        expect(operator()).to.be.equal(4.5);// check if the operator evaluate "9/2" with 4.5.
    })

    it('should return a function output to implement the input operator that returns 256 when passed ‘2^8’', () => {
        let operator = evaluate("2^8");
        expect(typeof(operator)).to.be.equal('function'); // check if it returns a function
        expect(operator()).to.be.equal(256);// check if the operator evaluate "2^8" with 256.
    })
})

describe('Testing Problem 3', () => {
    it('should return the result of the passed decorator function bit_stuffing on the passed string', () => {
        let bit_stuffing = doOperation(
            "supercalifragilisticexpialidocious",
            (value) => value.split(/(?=c)/g)
        );
        expect(JSON.stringify(bit_stuffing)).to.be.equal(JSON.stringify(['super', 'califragilisti', 'cexpialido', 'cious']));
    })

    it('should return the result of the passed decorator function bit_stuffing on the passed string', () => {
        let bit_stuffing = doOperation(
            "javajavascriptjsonjekinsjupyter",
            (value) => value.split(/(?=j)/g)
        );
        expect(JSON.stringify(bit_stuffing)).to.be.equal(JSON.stringify(['java', 'javascript', 'json', 'jekins', 'jupyter']));
    })

    it('should return the result of the passed decorator function replace_a_with_A on the passed string', () => {
        let replace_a_with_A = doOperation(
            "supercalifragilisticexpialidocious",
            (value) => ({
                originalString: value,
                modifiedString: value.replace(/a/g, "A"),
                numberReplaced: (value.match(/a/g, "A") || []).length,
                length: value.replace(/a/g, "A").length
            })
        );
        expect(JSON.stringify(replace_a_with_A)).to.be.equal(JSON.stringify({
                originalString: 'supercalifragilisticexpialidocious',
                modifiedString: 'supercAlifrAgilisticexpiAlidocious',
                numberReplaced: 3,
                length: 34
            })
        );
    })

    it('should return the result of the passed decorator function replace_dog_with_ferret on the passed string', () => {
        let replace_dog_with_ferret = doOperation(
            "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?",
            (value) => ({
                originalString: value,
                modifiedString: value.replace(/dog/g, "ferret"),
                numberReplaced: (value.match(/dog/g, "ferret") || []).length,
                length: value.replace(/dog/g, "ferret").length
            })
        );
        expect(JSON.stringify(replace_dog_with_ferret)).to.be.equal(JSON.stringify({
            originalString: 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?',
            modifiedString: 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?',
            numberReplaced: 2,
            length: 90
            })
        );
    })
})