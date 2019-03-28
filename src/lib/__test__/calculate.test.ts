import { add } from '../calculate'

describe('calculate', () => {
  describe('add()', () => {
    it('should return the sum of the given arguments', () => {
      const expected = 5 // 2 + 3
      const result = add(2, 3)
      expect(result).toBe(expected)
    })
  })
})
