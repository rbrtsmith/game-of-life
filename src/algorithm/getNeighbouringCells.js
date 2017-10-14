const isFirstX = x => x === 0
const isLastX = (x, grid) => x === grid[0].length - 1
const isFirstY = y => y === 0
const isLastY = (y, grid) => y === grid.length - 1

const getNorthCell = ([y, x], grid) =>
  isFirstY(y)
    ? null
    : grid[y - 1][x].val

const getNorthEastCell = ([y, x], grid) =>
  isFirstY(y) || isLastX(x, grid)
    ? null
    : grid[y - 1][x + 1].val

const getEastCell = ([y, x], grid) =>
  isLastX(x, grid)
    ? null
    : grid[y][x + 1].val

const getSouthEastCell = ([y, x], grid) =>
  isLastY(y, grid) || isLastX(x, grid)
    ? null
    : grid[y + 1][x + 1].val

const getSouthCell = ([y, x], grid) =>
  isLastY(y, grid)
    ? null
    : grid[y + 1][x].val

const getSouthWestCell = ([y, x], grid) =>
  isLastY(y, grid) || isFirstX(x)
    ? null
    : grid[y + 1][x - 1].val

const getWestCell = ([y, x], grid) =>
  isFirstX(x)
    ? null
    : grid[y][x - 1].val

const getNorthWestCell = ([y, x], grid) =>
  isFirstY(y) || isFirstX(x)
    ? null
    : grid[y - 1][x - 1].val


const getNeighbouringCells = {
  getNorthCell,
  getNorthEastCell,
  getEastCell,
  getSouthEastCell,
  getSouthCell,
  getSouthWestCell,
  getWestCell,
  getNorthWestCell
}

export default getNeighbouringCells
