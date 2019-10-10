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
        if (this.getWinner() != null || this.noMoreTurns() == true ) {
            return true;
        } else {
            return false;
        };
    }

    getWinner() {
        if (this.matrix[0][0] === 'x' && this.matrix[0][1] === 'x' && this.matrix[0][2] === 'x') {
            return 'x';
        } else if (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o') {
            return 'o';
        } else if (this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x') {
            return 'x';
        } else if (this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o') {
            return 'o';
        } else if (this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x') {
            return 'x';
        } else if (this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o') {
            return 'o';
        } else if (this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x') {
            return 'x';
        } else if (this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o') {
            return 'o';
        } else if (this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x') {
            return 'x';
        } else if (this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o') {
            return 'o';
        } else if (this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x') {
            return 'x';
        } else if (this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o') {
            return 'o';
        } else if (this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x') {
            return 'x';
        } else if (this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o') {
            return 'o';
        } else if (this.matrix[0][2] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][0] === 'x') {
            return 'x';
        } else if (this.matrix[0][2] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][0] === 'o') {
            return 'o';
        } else {
        return null;
        };
    }

    noMoreTurns() {
        let boo = true;
        let arr = [].concat(...this.matrix); // сам бы не додумался... это красиво
        arr.forEach(marker => {
            if (marker == null) {
                return boo = false; 
            };
        });
    return boo;
    }

    isDraw() {
        if (this.getWinner() == null && this.noMoreTurns() == true ) {
            return true;
        } else {
            return false;
        };
    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = colIndex;
        return this.matrix[this.rowIndex][this.columnIndex];
    }
}

module.exports = TicTacToe;
