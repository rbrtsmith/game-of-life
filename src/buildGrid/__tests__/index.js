import buildGrid from '../'
import shortid from 'shortid'

jest.mock('shortid')

describe('buildGrid', () => {
  shortid.mockImplementation(() => 'T')

  it('builds a two dimensional grid consisting of an Id and an empty cell value', () => {
    expect(buildGrid([], 2)).toEqual([
      [{ id: 'T', val: 0 }, { id: 'T', val: 0 }],
      [{ id: 'T', val: 0 }, { id: 'T', val: 0 }]
    ])
  })
})
