const updateCell = (rowIndex, cellIndex) => grid => ({
  ...grid[rowIndex][cellIndex],
  val: grid[rowIndex][cellIndex].val ? 0 : 1
})

const updateRow = (rowIndex, cellIndex) => grid => ([
  ...grid[rowIndex].slice(0, cellIndex),
  updateCell(rowIndex, cellIndex)(grid),
  ...grid[rowIndex].slice(cellIndex + 1)
])

const toggleGridCell = (rowIndex, cellIndex) => grid => ([
  ...grid.slice(0, rowIndex),
  updateRow(rowIndex, cellIndex)(grid),
  ...grid.slice(rowIndex + 1)
])

export default toggleGridCell
