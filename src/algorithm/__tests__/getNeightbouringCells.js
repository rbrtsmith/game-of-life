import getNeighbouringCells from '../getNeighbouringCells'

const {
  getNorthCell,
  getNorthEastCell,
  getEastCell,
  getSouthEastCell,
  getSouthCell,
  getSouthWestCell,
  getWestCell,
  getNorthWestCell
} = getNeighbouringCells

const grid = [
  [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }]
]

describe('getting adjacent cell', () => {
  describe('to north', () => {
    it('returns null if out of bounds', () => {
      expect(getNorthCell([0, 2], grid)).toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getNorthCell([5, 2], grid)).toBe(1)
      expect(getNorthCell([2, 3], grid)).toBe(0)
    })
  })

  describe('to northeast', () => {
    it('returns null if out of bounds', () => {
      expect(getNorthEastCell([0, 0], grid)).toBe(null)
      expect(getNorthEastCell([1, 5], grid)).toBe(null)
      expect(getNorthEastCell([1, 4], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getNorthEastCell([3, 2], grid)).toBe(1)
      expect(getNorthEastCell([3, 3], grid)).toBe(1)
      expect(getNorthEastCell([5, 1], grid)).toBe(1)
    })
  })

  describe('to east', () => {
    it('returns null if out of bounds', () => {
      expect(getEastCell([0, 5], grid)).toBe(null)
      expect(getEastCell([0, 3], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getEastCell([0, 3], grid)).toBe(0)
      expect(getEastCell([2, 1], grid)).toBe(1)
    })
  })

  describe('to south east', () => {
    it('returns null if out of bounds', () => {
      expect(getSouthEastCell([0, 5], grid)).toBe(null)
      expect(getSouthEastCell([5, 2], grid)).toBe(null)
      expect(getSouthEastCell([0, 3], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getSouthEastCell([0, 0], grid)).toBe(1)
      expect(getSouthEastCell([2, 1], grid)).toBe(0)
    })
  })

  describe('to south', () => {
    it('returns null if out of bounds', () => {
      expect(getSouthCell([5, 0], grid)).toBe(null)
      expect(getSouthCell([3, 3], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getSouthCell([1, 3], grid)).toBe(1)
      expect(getSouthCell([1, 1], grid)).toBe(0)
    })
  })

  describe('to south west', () => {
    it('returns null if out of bounds', () => {
      expect(getSouthWestCell([2, 0], grid)).toBe(null)
      expect(getSouthWestCell([5, 2], grid)).toBe(null)
      expect(getSouthWestCell([3, 3], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getSouthWestCell([1, 4], grid)).toBe(1)
      expect(getSouthWestCell([3, 4], grid)).toBe(1)
    })
  })

  describe('to west', () => {
    it('returns null if out of bounds', () => {
      expect(getWestCell([3, 0], grid)).toBe(null)
      expect(getWestCell([3, 3], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getWestCell([2, 5], grid)).toBe(1)
      expect(getWestCell([2, 2], grid)).toBe(0)
    })
  })

  describe('to north west', () => {
    it('returns null if out of bounds', () => {
      expect(getNorthWestCell([1, 0], grid)).toBe(null)
      expect(getNorthWestCell([0, 1], grid)).toBe(null)
      expect(getNorthWestCell([3, 3], grid)).not.toBe(null)
    })

    it('returns the value of the cell', () => {
      expect(getNorthWestCell([2, 5], grid)).toBe(0)
      expect(getNorthWestCell([2, 2], grid)).toBe(1)
    })
  })
})
