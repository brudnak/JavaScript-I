const objects = require('./objects')

test('Kennan says hello and introduces himself', () => {
    const spy = jest.spyOn(objects, 'speak')
    const isTalking = objects.speak()
    expect(spy).toHaveBeenCalled()
    expect(isTalking).toBe(`Hello, my name is ${objects.name}!`)
    spy.mockRestore()
})