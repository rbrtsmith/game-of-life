import React from 'react'
import T from 'prop-types'

import Row from './Row'

const Grid = ({ grid, onMouseDown, ...rest }) => (
  <div className="grid" onMouseDown={onMouseDown}>
    {
      grid.map((row, rowIndex) => (
        <Row key={`${row[0].id}`} {...{ row, rowIndex, ...rest }} />
      ))
    }
  </div>
)

Grid.propTypes = {
  onMouseDown: T.func.isRequired,
  grid: T.arrayOf(
    T.arrayOf(
      T.shape({
        id: T.string.isRequired
      }).isRequired
    ).isRequired
  ).isRequired
}

export default Grid
