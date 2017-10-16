import React from 'react'
import T from 'prop-types'
import Cell from './Cell'

const Row = ({ row, rowIndex, ...rest }) => (
  <div
    key={`${row[0].id}`}
    className="grid__row"
  >
    {
      row.map((cell, cellIndex) => (
        <Cell key={cellIndex} {...{ rowIndex, cellIndex, cell, ...rest }} />
      ))
    }
  </div>
)

Row.propTypes = {
  row: T.arrayOf(
    T.shape({ id: T.string.isRequired })
  ).isRequired,
  rowIndex: T.number.isRequired
}

export default Row
