import React from 'react'

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
  cell: { id, val }
}) => (
  <button
    onClick={handleClick.bind('', rowIndex, cellIndex)}
    onMouseEnter={handleMouseEnter.bind('', rowIndex, cellIndex)}
    key={id}
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

export default Cell
