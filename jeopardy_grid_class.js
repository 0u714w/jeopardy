class jeopardyGrid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 5
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()

    }


    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new jeopardyCell(rowIndex, columnIndex, this.rowElement)
                cell.id = "cell" + (String(columnIndex))

                console.log(cell)
                this.rowArray.push(cell)

            }
        }
    }
}

class jeopardyCell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.createCell()
    }
    createCell() {


        this.cell = document.createElement("span")
        this.cell.innerText = "hello"
        this.rowParent.appendChild(this.cell)
    }
}


// const one = new jeopardyCell

const categoryOne = new jeopardyGrid({

})