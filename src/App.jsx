import React, { Component } from 'react'
import { Button, Form, Grid } from 'nebula-react'

import buildGrid from './buildGrid'
import Game from './Grid'
import { nextTick } from './algorithm'
import './scss/main.scss'

class App extends Component {
  state = {
    gridSize: 15,
    grid: null,
    gridMouseDown: false,
    running: false,
    tickInterval: 500,
    transitionDuration: 0.2
  }

  componentWillMount() {
    this.setState(() => ({
      grid: buildGrid([], this.state.gridSize)
    }))
  }

  interval = null

  componentDidUpdate(prevProps, prevState) {
    if (prevState.running !== this.state.running) {
      if (this.state.running) {
        this.interval = setInterval(this.nextTick, this.state.tickInterval)
      } else {
        clearInterval(this.interval)
      }
    }
  }

  nextTick = () => {
    this.setState(({ grid }) => ({
      grid: nextTick(grid)
    }))
  }

  handleButtonClick = () => {
    this.setState(state => ({
      running: !state.running
    }))
  }

  onGridMouseDown = () => {
    this.setState(() => ({
      gridMouseDown: true
    }))
  }

  onMouseUp = () => {
    this.setState(() => ({
      gridMouseDown: false
    }))
  }

  toggleCell = (rowIndex, cellIndex) => {
    this.setState(state => ({
      grid: [
        ...state.grid.slice(0, rowIndex),
        [
          ...state.grid[rowIndex].slice(0, cellIndex),
          {
            ...state.grid[rowIndex][cellIndex],
            val: state.grid[rowIndex][cellIndex].val ? 0 : 1
          },
          ...state.grid[rowIndex].slice(cellIndex + 1)
        ],
        ...state.grid.slice(rowIndex + 1)
      ]
    }))
  }

  handleSelectIntervalChange = ({ target: { value } }) => {
    this.setState(() => ({ tickInterval: value, running: false }))
  }

  handleSelectTransitionDurationChange = ({ target: { value } }) => {
    this.setState(() => ({ transitionDuration: value }))
  }

  render() {
    return (
      <div className="App" onMouseUp={this.onMouseUp} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1>Game of Life</h1>
        <p>Fill some squares then hit Start!</p>
        <Game
          grid={this.state.grid}
          gridSize={this.state.gridSize}
          transitionDuration={this.state.transitionDuration}
          onMouseDown={this.onGridMouseDown}
          isMouseDown={this.state.gridMouseDown}
          toggleCell={this.toggleCell}
        />
        <Grid.Wrapper spacing="md" matrix gutter="md">
          <Grid.Item width="1/2">
            <Form.Select
              onChange={this.handleSelectIntervalChange}
              small
              value={this.state.tickInterval}
            >
              <option value={100}>
                Tick Interval: 100ms
              </option>
              <option value={200}>
                Tick Interval: 200ms
              </option>
              <option value={500}>
                Tick Interval: 500ms
              </option>
              <option value={1000}>
                Tick Interval: 1s
              </option>
            </Form.Select>
          </Grid.Item>
          <Grid.Item width="1/2">
            <Form.Select
              onChange={this.handleSelectTransitionDurationChange}
              small
              value={this.state.transitionDuration}
            >
              <option value={0}>
                Transition: 0ms
              </option>
              <option value={0.1}>
                Transition: 100ms
              </option>
              <option value={0.2}>
                Transition: 200ms
              </option>
              <option value={0.4}>
                Transition: 400ms
              </option>
            </Form.Select>
          </Grid.Item>
          <Grid.Item>
            <Button size="lg" fullWidth theme="alpha" onClick={this.handleButtonClick}>
              {
                this.state.running ? 'Stop' : 'Start'
              }
            </Button>
          </Grid.Item>
        </Grid.Wrapper>
      </div>
    );
  }
}

export default App
