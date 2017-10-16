import React from 'react'
import T from 'prop-types'

const buildClassName = value => {
  if (value === -1) {
    return 'grid__cell--perished'
  }

  return value ? 'grid__cell--populated' : ''
}

const Cell = ({
  handleClick,
  handleMouseEnter,
  rowIndex,
  cellIndex,
  gridSize,
  transitionDuration,
  cell: { val }
}) => (
  <button
    onClick={handleClick.bind('', rowIndex, cellIndex)}
    onMouseEnter={handleMouseEnter.bind('', rowIndex, cellIndex)}
    className={`grid__cell ${buildClassName(val)}`}
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

Cell.propTypes = {
  handleClick: T.func.isRequired,
  handleMouseEnter: T.func.isRequired,
  rowIndex: T.number.isRequired,
  cellIndex: T.number.isRequired,
  gridSize: T.number.isRequired,
  transitionDuration: T.number.isRequired,
  cell: T.shape({
    val: T.oneOf([-1, 0, 1]).isRequired
  }).isRequired
}

export default Cell
