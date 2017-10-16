import React from 'react'
import { mount } from 'enzyme'

import Row from '../Row'
import GameContainer from '../'

const defaultProps = {
  gridSize: 2,
  transitionDuration: 0.2,
  toggleCell: jest.fn(),
  isMouseDown: false,
  onMouseDown: jest.fn(),
  grid: [
    [{ id: 'T', val: 0 }, { id: 'T1', val: 0 }]
  ]
}

describe('<GameContainer />', () => {
  it('toggles the cell when the mouse enters and mouse button is pressed', () => {
    const mockToggleCell = jest.fn()
    const props = {
      ...defaultProps,
      toggleCell: mockToggleCell,
      isMouseDown: true
    }
    const $ = mount(<GameContainer {...props} />)
    expect(mockToggleCell).not.toBeCalled()

    $.find(Row).childAt(0).childAt(1).simulate('mouseenter')
    expect(mockToggleCell).toBeCalledWith(0, 1)
  })

  it('does not toggles the cell when the mouse enters and mouse button is not pressed', () => {
    const mockToggleCell = jest.fn()
    const props = {
      ...defaultProps,
      toggleCell: mockToggleCell,
      isMouseDown: false
    }
    const $ = mount(<GameContainer {...props} />)
    expect(mockToggleCell).not.toBeCalled()

    $.find(Row).childAt(0).childAt(1).simulate('mouseenter')
    expect(mockToggleCell).not.toBeCalled()
  })

  it('toggles the cell when clicked', () => {
    const mockToggleCell = jest.fn()
    const props = {
      ...defaultProps,
      toggleCell: mockToggleCell
    }
    const $ = mount(<GameContainer {...props} />)
    expect(mockToggleCell).not.toBeCalled()

    $.find(Row).childAt(0).childAt(0).simulate('click')
    expect(mockToggleCell).toBeCalledWith(0, 0)
  })
})