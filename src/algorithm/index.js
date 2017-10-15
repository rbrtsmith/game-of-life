import evaluateCell from './evaluateCell'

const evaulateRow = (grid, row, rowIndex) =>
  row.map((cell, i) => evaluateCell(grid, cell, rowIndex, i))

const nextTick = grid =>
  grid.map((row, i) => evaulateRow(grid, row, i))

export default nextTick
