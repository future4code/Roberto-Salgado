const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrixB = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
];
// a.
function printMatrix(m) {
    for (let i = 0; i < m.length; i++) {
        let currRow = "";
        for (let j = 0; j < m[i].length; j++) {
            if (j === m[i].length - 1) {
                currRow += m[i][j];
            }
            else {
                currRow += m[i][j] + " ";
            }
        }
        console.log(currRow);
    }
}
;
printMatrix(matrixA);
printMatrix(matrixB);
// b.
function sumMatrix(matrixA, matrixB) {
    const newMatrix = [];
    if (matrixA.length !== matrixB.length ||
        matrixA[0].length !== matrixB[0].length) {
        throw new Error("As dimensões das matrizes devem ser iguais");
    }
    const rowSize = matrixA[0].length;
    const columnSize = matrixB[0].length;
    for (let i = 0; i < rowSize; i++) {
        let newMatrixRow = [];
        for (let j = 0; j < columnSize; j++) {
            newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        newMatrix.push(newMatrixRow);
    }
    return newMatrix;
}
;
const matrixSum = sumMatrix(matrixA, matrixB);
printMatrix(matrixSum);
// c.
function transposeMatrix(m) {
    const transposed = [];
    if (!m.length) {
        throw new Error("Matriz inválida");
    }
    for (let j = 0; j < m[0].length; j++) {
        let row = [];
        for (let i = 0; i < m.length; i++) {
            row.push(m[i][j]);
        }
        transposed.push(row);
    }
    return transposed;
}
;
const transposedMatrixA = transposeMatrix(matrixA);
printMatrix(transposedMatrixA);
const transposedMatrixB = transposeMatrix(matrixB);
printMatrix(transposedMatrixB);
const recMatrixA = [
    [1, 2],
    [1, 2],
    [1, 2]
];
printMatrix(recMatrixA);
const transposedRecMatrixA = transposeMatrix(recMatrixA);
printMatrix(transposedRecMatrixA);
const recMatrixB = [
    [1, 2, 3],
    [1, 2, 3]
];
printMatrix(recMatrixB);
const transposedRecMatrixB = transposeMatrix(recMatrixB);
printMatrix(transposedRecMatrixB);
// d.
function multiplyMatrix(matrixA, matrixB) {
    const result = [];
    if (matrixA[0].length !== matrixB.length) {
        throw new Error("Matrizes inválidas");
    }
    for (let i = 0; i < matrixA.length; i++) {
        let rowResult = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sumResult = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sumResult += matrixA[i][k] * matrixB[k][j];
            }
            rowResult.push(sumResult);
        }
        result.push(rowResult);
    }
    return result;
}
;
const matrixAB = multiplyMatrix(matrixA, matrixB);
printMatrix(matrixAB);
const matrixBA = multiplyMatrix(matrixB, matrixA);
printMatrix(matrixBA);
const matrixARecA = multiplyMatrix(matrixA, recMatrixA);
printMatrix(matrixARecA);
const matrixRecBA = multiplyMatrix(recMatrixB, matrixA);
printMatrix(matrixRecBA);
const matrixRecARecB = multiplyMatrix(recMatrixA, recMatrixB);
printMatrix(matrixRecARecB);
const matrixRecBRecA = multiplyMatrix(recMatrixB, recMatrixA);
printMatrix(matrixRecBRecA);
