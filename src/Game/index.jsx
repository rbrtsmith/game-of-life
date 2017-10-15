import React from 'react'
import Grid from './Grid'

const GameContainer = ({ toggleCell, isMouseDown, ...rest }) => {
  const handleClick = (rowIndex, cellIndex) => {
    toggleCell(rowIndex, cellIndex)
  }

  const handleMouseEnter = (rowIndex, cellIndex) => {
    if (isMouseDown) {
      toggleCell(rowIndex, cellIndex)
    }
  }

  return (
    <Grid {...{ handleClick, handleMouseEnter, ...rest }} />
  )
}

export default GameContainer
