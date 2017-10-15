import React from 'react'
import Row from './Row'

const Grid = ({ grid, ...rest }) => (
  <div className="grid" {...rest}>
    {
      grid.map((row, rowIndex) => (
        <Row {...{ row, rowIndex, ...rest }} />
      ))
    }
  </div>
)

export default Grid
