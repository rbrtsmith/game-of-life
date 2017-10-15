import { twoOrThreeNeighbours, threeNeighbours } from './quantityOfNeighbours'

const evaluateCell = (grid, cell, rowIndex, cellIndex) => {
  const cellCoords = [rowIndex, cellIndex]
  switch (cell.val) {
    case -1:
      return { ...cell, val: 0 }
    case 1:
      return twoOrThreeNeighbours(cellCoords, grid)
        ? { ...cell, val: 1 }
        : { ...cell, val: -1 }
    default:
      return threeNeighbours(cellCoords, grid)
        ? { ...cell, val: 1 }
        : { ...cell, val: 0 }
  }
}

export default evaluateCell
