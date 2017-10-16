import React from 'react'
import T from 'prop-types'

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

GameContainer.protoTypes = {
  toggleCell: T.func.isRequired,
  isMouseDown: T.bool.isRequired
}

export default GameContainer
