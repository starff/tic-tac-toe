class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
          ];
          this.marker = 'x';
    } 

    getCurrentPlayerSymbol() {
        return this.marker;
    }

    nextTurn(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        if (this.matrix[this.rowIndex][this.columnIndex] == null) {
        this.matrix[this.rowIndex][this.columnIndex] = this.marker;
        if (this.marker == 'x') {
            this.marker = 'o';
        } else {
            this.marker = 'x';
        };
        };
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        let boo = true;
        this.matrix.flat().forEach(marker => {
            if (marker == null) {
                return boo = false; 
                // break;
            };
        });
    return boo;
    }

    //     let boo = 0;
    //     this.matrix.forEach(rows => {
    //         rows.forEach(marker => {
    //         if (marker != null) {
    //             boo == true;
    //         } else {
    //             boo == false;
    //         };
    //     });
    //     }); 
    //     return boo;
    // }

    isDraw() {
        this.matrix.forEach(marker => {
            if (marker != null) {
                return true;
            } else {
                return false;
            };
        });
    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = colIndex;
        return this.matrix[this.rowIndex][this.columnIndex];
    }
}

module.exports = TicTacToe;
