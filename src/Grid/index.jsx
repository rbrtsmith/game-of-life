import React, { Component } from 'react'

const buildClassName = value => {
  if (value === -1) {
    return 'grid__cell--perished'
  }

  return value ? 'grid__cell--populated' : ''
}

class Grid extends Component {
  render() {
    const { grid, gridSize, transitionDuration, isMouseDown, toggleCell, ...props } = this.props
    const handleClick = (rowIndex, cellIndex) => {
      toggleCell(rowIndex, cellIndex)
    }

    const handleMouseEnter = (rowIndex, cellIndex) => {
      if (isMouseDown) {
        toggleCell(rowIndex, cellIndex)
      }
    }

    return (
      <div className="grid" {...props}>
        {
          grid.map((row, rowIndex) => (
            <div
              key={`${row[rowIndex].id}-${row[rowIndex].id}`}
              className="grid__row"
            >
              {
                row.map((cell, cellIndex) =>
                  <button
                    onClick={handleClick.bind('', rowIndex, cellIndex)}
                    onMouseEnter={handleMouseEnter.bind('', rowIndex, cellIndex)}
                    key={cell.id}
                    className={`grid__cell ${buildClassName(cell.val)}`}
                    style={{
                      width: `${100 / gridSize}%`,
                      paddingBottom: `${100 / gridSize}%`,
                    }}
                  >
                    <div
                      className="grid__cell-overlay"
                      style={{
                        transition: `background-color ${transitionDuration}s, transform ${transitionDuration}s`
                      }}
                    />
                  </button>
                )
              }
            </div>
          ))
        }
      </div>
    )
  }
}
export default Grid
