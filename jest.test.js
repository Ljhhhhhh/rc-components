test('test', () => {
  expect( 2 + 2 ).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('boolean', () => {
  expect(0).toBeFalsy()
  expect(1).toBeTruthy()
})

test('number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('object', () => {
  expect({name: 'lujiehui'}).toEqual({name: 'lujiehui'})
})