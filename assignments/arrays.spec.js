const { searchID } = require('./arrays')

describe('arrays.js', () => {
    describe('searchID function', () => {
        it('search an array of objects and match on ID', () => {
            const expectedOutput = '25'
            const actualOutput = searchID(25).split(' ')[1]    
            expect(actualOutput).toEqual(expectedOutput)
        })
        })
    })
    