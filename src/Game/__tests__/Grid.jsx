import React from 'react'
import { shallow } from 'enzyme'

import Grid from '../Grid'
import Row from '../Row'

const defaultProps = {
  onMouseDown: jest.fn(),
  grid: [[{ id: 'T' }]]
}

describe('<Grid />', () => {
  it('renders with the correct className and key', () => {
    const props = {
      ...defaultProps
    }
    const $ = shallow(<Grid {...props} />)
    expect($.hasClass('grid')).toBe(true)
  })

  it('renders with the correct number of rows', () => {
    const props = {
      ...defaultProps,
      grid: [
        [{ id: 'T' }],
        [{ id: 'B' }]
      ]
    }
    const $ = shallow(<Grid {...props} />)
    expect($.find(Row)).toHaveLength(2)
  })

  it('handles mousedown events', () => {
    const mockOnMouseDown = jest.fn()
    const props = {
      ...defaultProps,
      onMouseDown: mockOnMouseDown
    }
    const $ = shallow(<Grid {...props} />)
    expect(mockOnMouseDown).not.toHaveBeenCalled()

    $.simulate('mousedown')
    expect(mockOnMouseDown).toHaveBeenCalled()
  })
})