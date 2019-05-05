const { kennan, antonietta } = require('./objects')


describe('objects.js', () => {
    describe('kennan object method speak', () => {
        it('can create a string literal greeting', () => {
            const expectedOutput = 'Hello, my name is Kennan!'
            const actualOutput = kennan.speak()
            expect(actualOutput).toBe(expectedOutput)
        })
    })
})

describe('objects.js', () => {
    describe('antonietta object method multiplyNums', () => {
        it('can multiply two parseInt or parseFloat values', () => {
            expect(antonietta.multiplyNums(2,6)).toBe(12)
            expect(antonietta.multiplyNums(2,1.5)).toBe(3)
        })
    })
})
