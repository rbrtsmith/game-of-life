import React from 'react'
import { shallow } from 'enzyme'

import Cell from '../Cell'

const defaultCell = { val: 0 }
const defaultProps = {
  handleClick: jest.fn(),
  handleMouseEnter: jest.fn(),
  rowIndex: 1,
  cellIndex: 1,
  gridSize: 1,
  transitionDuration: 1,
  cell: { ...defaultCell }
}

describe('<Cell />', () => {
  it('renders a button that can render unpopulated', () => {
    const props = {
      ...defaultProps,
      cell: {
        ...defaultCell,
        val: 0
      }
    }
    const $ = shallow(<Cell {...props} />)
    expect($.type()).toBe('button')
    expect($.hasClass('grid__cell')).toBe(true)
    expect($.hasClass('grid__cell--perished')).toBe(false)
    expect($.hasClass('grid__cell--populated')).toBe(false)
  })

  it('renders populated', () => {
    const props = {
      ...defaultProps,
      cell: {
        ...defaultCell,
        val: 1
      }
    }
    const $ = shallow(<Cell {...props} />)
    expect($.hasClass('grid__cell')).toBe(true)
    expect($.hasClass('grid__cell--perished')).toBe(false)
    expect($.hasClass('grid__cell--populated')).toBe(true)
  })

  it('renders perished', () => {
    const props = {
      ...defaultProps,
      cell: {
        ...defaultCell,
        val: -1
      }
    }
    const $ = shallow(<Cell {...props} />)
    expect($.hasClass('grid__cell')).toBe(true)
    expect($.hasClass('grid__cell--perished')).toBe(true)
    expect($.hasClass('grid__cell--populated')).toBe(false)
  })

  it('renders with dimensions in proportion to the grid size', () => {
    const props = {
      ...defaultProps,
      gridSize: 10
    }
    const $ = shallow(<Cell {...props} />)
    expect($.prop('style').paddingBottom).toBe('10%')
    expect($.prop('style').width).toBe('10%')
  })

  it('handles click events, binding the row and cell indexes', () => {
    const mockHandleClick = jest.fn()

    const props = {
      ...defaultProps,
      rowIndex: 2,
      cellIndex: 1,
      handleClick: mockHandleClick
    }
    const $ = shallow(<Cell {...props} />)
    expect(mockHandleClick).not.toBeCalled()
    
    $.simulate('click')
    expect(mockHandleClick).toHaveBeenCalledWith(2, 1)
  })

  it('handles mouseEnter events, binding the row and cell indexes', () => {
    const mockHandleMouseEnter = jest.fn()

    const props = {
      ...defaultProps,
      rowIndex: 2,
      cellIndex: 1,
      handleMouseEnter: mockHandleMouseEnter
    }
    const $ = shallow(<Cell {...props} />)
    expect(mockHandleMouseEnter).not.toBeCalled()

    $.simulate('mouseEnter')
    expect(mockHandleMouseEnter).toHaveBeenCalledWith(2, 1)
  })

  it('renders an overlay with a defined transitionDuration', () => {
    const props = {
      ...defaultProps,
      transitionDuration: 0.1
    }
    const $ = shallow(<Cell {...props} />)
    expect($.childAt(0).hasClass('grid__cell-overlay')).toBe(true)
    expect($.childAt(0).prop('style').transition)
      .toBe('background-color 0.1s, transform 0.1s')
  })
})