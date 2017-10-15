import nextTick from '../'

describe('next tick', () => {
  it('returns a new updated grid having executed the rules', () => {
    const input = [
      [{ val: -1 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }]
    ]

    const expected = [
      [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: -1 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 1 }, { val: 1 }, { val: 0 }],
      [{ val: 0 }, { val: 1 }, { val: 0 }, { val: -1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: -1 }, { val: 1 }, { val: 1 }, { val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }, { val: 1 }, { val: 0 }, { val: 0 }, { val: 0 }]
    ]
    expect(nextTick(input)).toEqual(expected)
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
