import shortid from 'shortid'

const buildRow = (row, size) =>
  row.length === size
    ? row
    : buildRow([...row, { id: shortid(), val: 0 }], size)

const buildGrid = (grid, size) =>
  grid.length === size
    ? grid
    : buildGrid([...grid, buildRow([], size)], size)

export default buildGrid
