import React from 'react'
import Cell from './Cell'

const Row = ({ row, rowIndex, ...rest }) => (
  <div
    key={`${row[rowIndex].id}-${row[rowIndex].id}`}
    className="grid__row"
  >
    {
      row.map((cell, cellIndex) => (
        <Cell {...{ rowIndex, cellIndex, cell, ...rest }} />
      ))
    }
  </div>
)

export default Row
