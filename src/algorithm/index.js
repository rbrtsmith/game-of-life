import getNeighbouringCellFns from './getNeighbouringCells'

const getQtyNeighbours = (cellCoords, grid) =>
  Object.values(getNeighbouringCellFns)
    .reduce((total, fn) => (
      fn(cellCoords, grid) === 1 ? total += 1 : total
    ), 0)

const twoOrThreeNeighbours = (cellCoords, grid) =>
  getQtyNeighbours(cellCoords, grid) > 1 &&
  getQtyNeighbours(cellCoords, grid) < 4
    ? true
    : false

const threeNeighbours = (cellCoords, grid) =>
  getQtyNeighbours(cellCoords, grid) === 3
    ? true
    : false

const evaluateCell = (grid, cell, rowIndex, cellIndex) => {
  const cellCoords = [rowIndex, cellIndex]
  if (cell.val === - 1) {
    return { ...cell, val: 0 }
  }

  if (cell.val === 1) {
    return twoOrThreeNeighbours(cellCoords, grid)
    ? { ...cell, val: 1 }
    : { ...cell, val: -1 }
  }

  return threeNeighbours(cellCoords, grid)
    ? { ...cell, val: 1 }
    : { ...cell, val: 0 }
}

const evaulateRow = (grid, row, rowIndex) =>
  row.map((cell, i) => evaluateCell(grid, cell, rowIndex, i))

const nextTick = grid =>
  grid.map((row, i) => evaulateRow(grid, row, i))

export { twoOrThreeNeighbours, threeNeighbours, nextTick }
