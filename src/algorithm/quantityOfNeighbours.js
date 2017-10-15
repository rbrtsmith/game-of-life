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

export { twoOrThreeNeighbours, threeNeighbours }
