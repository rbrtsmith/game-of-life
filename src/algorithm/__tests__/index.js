import nextTick from '../'
import { twoOrThreeNeighbours, threeNeighbours } from '../quantityOfNeighbours'

const grid = [
  [{ val: -1 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
  [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }]
]

describe('populated cell', () => {
  it('it survives if it has two or three neighbours', () => {
    expect(twoOrThreeNeighbours([1, 1], grid)).toBe(false)
    expect(twoOrThreeNeighbours([2, 2], grid)).toBe(true)
    expect(twoOrThreeNeighbours([2, 3], grid)).toBe(true)
    expect(twoOrThreeNeighbours([2, 4], grid)).toBe(true)
    expect(twoOrThreeNeighbours([3, 3], grid)).toBe(false)
    expect(twoOrThreeNeighbours([4, 1], grid)).toBe(false)
    expect(twoOrThreeNeighbours([4, 2], grid)).toBe(true)
    expect(twoOrThreeNeighbours([4, 3], grid)).toBe(true)
  })
})

describe('empty cell', () => {
  it('becomes populated if it has three neighbours', () => {
    expect(threeNeighbours([0, 0], grid)).toBe(false)
    expect(threeNeighbours([1, 0], grid)).toBe(false)
    expect(threeNeighbours([1, 2], grid)).toBe(true)
    expect(threeNeighbours([2, 1], grid)).toBe(false)
    expect(threeNeighbours([3, 0], grid)).toBe(false)
    expect(threeNeighbours([3, 1], grid)).toBe(true)
    expect(threeNeighbours([5, 1], grid)).toBe(false)
    expect(threeNeighbours([5, 2], grid)).toBe(true)
    expect(threeNeighbours([5, 3], grid)).toBe(false)
  })
})

describe('next tick', () => {
  it('returns a new updated grid having executed the rules', () => {
    const expected = [
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: -1 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }],
      [{ val: 0 }, { val: 1 }, { val: 0 }, { val: -1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: -1 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }, { val: 0 }]
    ]
    expect(nextTick(grid)).toEqual(expected)
  })

  it('removes dead cells', () => {
    const input = [
      [{ val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }],
      [{ val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }],
      [{ val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }],
      [{ val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }],
      [{ val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }],
      [{ val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }, { val: -1 }]
    ]

    const expected = [
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }]
    ]
    expect(nextTick(input)).toEqual(expected)
  })
})
