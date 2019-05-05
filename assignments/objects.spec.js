const { kennan, antonietta, parent, child, grandchild } = require('./objects')


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

describe('object.js', () => {
    describe('parent object method speak', () => {
        it('can create a string literal greeting', () => {
            const expectedOutput = `Hello, I'm the parent ${parent.name}`
            const actualOutput = parent.speak()
            expect(actualOutput).toBe(expectedOutput)
        })
    })
})

describe('object.js', () => {
    describe('nested inside of the parent object', () => {
        describe('child object method speak', () => {
            it('can create a string literal greeting', () => {
                const expectedOutput = `Hello, I'm the child ${child.name}`
                const actualOutput = child.speak()
                expect(actualOutput).toBe(expectedOutput)
            })
        })
    })
})

describe('objest.js', () => {
    describe('nested inside of the parent object', () => {
        describe('nested inside of the child object', () => {
            it('can create a string literal greeting', () => {
                const expectedOutput = `Hello, I'm the grandchild ${grandchild.name}`
                const actualOutput = grandchild.speak()
                expect(actualOutput).toBe(expectedOutput)
            })
        })
    })
})
