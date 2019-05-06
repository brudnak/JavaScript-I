const { searchID } = require('./arrays')

describe('arrays.js', () => {
    describe('searchID function', () => {
        it('search an array of objects and match on ID', () => {
            const expectedOutput = '1'
            const actualOutput = searchID(1)[4]            
            expect(actualOutput).toEqual(expectedOutput)
        })
        })
    })
    