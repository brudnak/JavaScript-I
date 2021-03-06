const { myFunction,
        anotherFunction,
        add,
        subtract,
        triple

} = require('./function-conversion')

describe('function-conversion.js', () => {
    describe('message logged in console', () => {
        it('hard coded string "Function was invoked!"', () => {
            console.log = jest.fn()
            myFunction()
            expect(console.log).toHaveBeenCalledWith('Function was invoked!')
        })
    })
})

describe('function-conversion.js', () => {
    describe('anotherFunction returns input', () => {
        it('returns the parameter it was pased', () => {
            expect(anotherFunction(19)).toBe(19)
            expect(anotherFunction('Russell')).toBe('Russell')
        })
    })
})

describe('function-conversion.js', () => {
    describe('add function sums two numbers', () => {
        it('can add two numbers', () => {
            expect(add(2, 6)).toBe(8)
            expect(add(2, 1)).toBe(3)
        })
    })
})

describe('function-conversion.js', () => {
    describe('subtract function', () => {
        it('subtracts a number', () => {
            expect(subtract(20, 10)).toBe(10)
            expect(subtract(-5, 3)).toBe(-8)
        })
    })
})

describe('function-conversion.js', () => {
    describe('triple function', () => {
        it('maps through an array and multiples by three', () => {
            const testArray = [10, 20, 30]
            const expectedOutput = [30, 60, 90]
            const actualOutput = triple(testArray)
            expect(actualOutput).toEqual(expectedOutput)
        })
    })
})