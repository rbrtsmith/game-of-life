import React from 'react'
import { shallow } from 'enzyme'

import Row from '../Row'
import Cell from '../Cell'

const defaultCell = { id: 'test', val: 0 }

const defaultRow = [{ ...defaultCell }]
const defaultProps = {
  handleClick: jest.fn(),
  handleMouseEnter: jest.fn(),
  rowIndex: 0,
  gridSize: 1,
  id: '_',
  transitionDuration: 1,
  row: defaultRow,
}

describe('<Row />', () => {
  it('renders with the correct className and key', () => {
    const props = {
      ...defaultProps,
      row: [{ id: 'test-id', val: 0}]
    }
    const $ = shallow(<Row {...props} />)
    expect($.hasClass('grid__row')).toBe(true)
    expect($.key()).toBe('test-id')
  })

  it('renders the correct number of cells', () => {
    const props = {
      ...defaultProps,
      row: [{ ...defaultCell }, { ...defaultCell }]
    }
    const $ = shallow(<Row {...props} />)
    expect($.find(Cell)).toHaveLength(2)
  })
})