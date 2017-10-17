import toggleGridCell from '../toggleGridCell'

describe('toggleGridCell', () => {
  it('toggles the grid cell', () => {
    expect(toggleGridCell(0, 1)(
      [
        [{ val: 0 }, { val: 0 }],
        [{ val: 0 }, { val: 0 }]
      ]
    )).toEqual([
      [{ val: 0 }, { val: 1 }],
      [{ val: 0 }, { val: 0 }]
    ])

    expect(toggleGridCell(1, 1)(
      [
        [{ val: 1 }, { val: 0 }],
        [{ val: 0 }, { val: 1 }]
      ]
    )).toEqual([
      [{ val: 1 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }]
    ])
  })

  it('doesnt mutate the input grid', () => {
    const grid = [
      [{ val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }]
    ]

    toggleGridCell(0, 1)(grid)
    expect(grid).toEqual([
      [{ val: 0 }, { val: 0 }],
      [{ val: 0 }, { val: 0 }]
    ])
  })
})
