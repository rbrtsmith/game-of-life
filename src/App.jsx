import React, { PureComponent } from 'react'

import Settings from './Settings'
import buildGrid from './buildGrid'
import Game from './Game'
import nextTick from './algorithm'
import toggleGridCell from './utilities/toggleGridCell'
import './scss/main.scss'

class App extends PureComponent {
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
    if (prevState.running === this.state.running) { 
      return null
    }

    if (this.state.running) {
      this.interval = setInterval(this.nextTick, this.state.tickInterval)
    } else {
      clearInterval(this.interval)
    }
  }

  nextTick = () =>
    this.setState(({ grid }) => ({ grid: nextTick(grid) }))

  handleStartStopButtonClick = () =>
    this.setState(state => ({ running: !state.running }))

  onGridMouseDown = () =>
    this.setState(() => ({ gridMouseDown: true }))

  onMouseUp = () =>
    this.setState(() => ({ gridMouseDown: false }))

  toggleCell = (rowIndex, cellIndex) =>
    this.setState(({ grid }) =>
      ({ grid: toggleGridCell(rowIndex, cellIndex)(grid)}))

  handleSelectIntervalChange = ({ target: { value } }) =>
    this.setState(() =>
      ({ tickInterval: parseInt(value, 10), running: false }))

  handleSelectTransitionDurationChange = ({ target: { value } }) =>
    this.setState(() =>
      ({ transitionDuration: parseInt(value, 10) }))

  render() {
    const { gridMouseDown } = this.state
    const {
      onGridMouseDown,
      toggleCell,
      handleSelectIntervalChange,
      handleSelectTransitionDurationChange,
      handleStartStopButtonClick
    } = this
    return (
      <div
        className="App"
        onMouseUp={this.onMouseUp}
        style={{ maxWidth: '500px', margin: '0 auto' }}
      >
        <h1>Game of Life</h1>
        <p>Fill some squares then hit Start!</p>
        <Game
          {...{ ...this.state }}
          onMouseDown={onGridMouseDown}
          isMouseDown={gridMouseDown}
          toggleCell={toggleCell}
        />
        <Settings
          {...{
            handleSelectIntervalChange,
            handleSelectTransitionDurationChange,
            handleStartStopButtonClick,
            ...this.state
          }}
        />
        <p>
          <strong>
            <a href="https://github.com/rbrtsmith/game-of-life">
              GitHub Repo
            </a>
          </strong>
        </p>
      </div>
    );
  }
}

export default App
