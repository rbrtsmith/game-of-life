import React from 'react'
import { shallow } from 'enzyme'
import { Grid, Form, Button } from 'nebula-react'

import Settings from '../'

const defaultProps = {
  handleSelectIntervalChange: jest.fn(),
  handleSelectTransitionDurationChange: jest.fn(),
  handleStartStopButtonClick: jest.fn(),
  tickInterval: 100,
  transitionDuration: 0.1,
  running: false
}

describe('<Settings />', () => {
  it('renders the form items in a Nebula Grid', () => {
    const props = {
      ...defaultProps
    }
    const $ = shallow(<Settings {...props} />)
    expect($.type()).toBe(Grid.Wrapper)
    expect($.childAt(0).type()).toBe(Grid.Item)
  })

  describe('Start / Stop button', () => {
    it('renders a Nebula button responding to click events', () => {
      const mockHandleStartStopButtonClick = jest.fn()
      const props = {
        ...defaultProps,
        handleStartStopButtonClick: mockHandleStartStopButtonClick
      }
      const $ = shallow(<Settings {...props} />)
      expect(mockHandleStartStopButtonClick).not.toBeCalled()

      $.find(Button).simulate('click')
      expect(mockHandleStartStopButtonClick).toBeCalled()
    })

    it('renders with the text "Start" or "Stop" depending on the running status', () => {
      const props = {
        ...defaultProps,
        running: false
      }
      const $ = shallow(<Settings {...props} />)
      expect($.find(Button).childAt(0).text()).toBe('Start')

      $.setProps({ running: true })
      expect($.find(Button).childAt(0).text()).toBe('Stop')
    })
  })

  describe('tickInterval', () => {
    const getSelect = $ => $.childAt(0).childAt(0)

    it('renders Nebula Form Select', () => {
      const props = {
        ...defaultProps
      }
      const $ = shallow(<Settings {...props} />)
      expect(getSelect($).type()).toBe(Form.Select)
    })

    it('renders with tickValue as the value', () => {
      const props = {
        ...defaultProps,
        tickInterval: 300
      }
      const $ = shallow(<Settings {...props} />)
      expect(getSelect($).prop('value')).toBe(300)
    })

    it('handles change events', () => {
      const mockHandleSelectIntervalChange = jest.fn()
      const props = {
        ...defaultProps,
        handleSelectIntervalChange: mockHandleSelectIntervalChange
      }
      const $ = shallow(<Settings {...props} />)
      expect(mockHandleSelectIntervalChange).not.toBeCalled()

      getSelect($).simulate('change')
      expect(mockHandleSelectIntervalChange).toBeCalled()
    })
  })

  describe('transitionDuration', () => {
    const getSelect = $ => $.childAt(1).childAt(0)

    it('renders Nebula Form Select', () => {
      const props = {
        ...defaultProps
      }
      const $ = shallow(<Settings {...props} />)
      expect(getSelect($).type()).toBe(Form.Select)
    })

    it('renders with transitionDuration as the value', () => {
      const props = {
        ...defaultProps,
        transitionDuration: 300
      }
      const $ = shallow(<Settings {...props} />)
      expect(getSelect($).prop('value')).toBe(300)
    })

    it('handles change events', () => {
      const mockHandleSelectTransitionDurationChange = jest.fn()
      const props = {
        ...defaultProps,
        handleSelectTransitionDurationChange: mockHandleSelectTransitionDurationChange
      }
      const $ = shallow(<Settings {...props} />)
      expect(mockHandleSelectTransitionDurationChange).not.toBeCalled()

      getSelect($).simulate('change')
      expect(mockHandleSelectTransitionDurationChange).toBeCalled()
    })
  })
})
