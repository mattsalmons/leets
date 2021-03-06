/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    
    for (let i = 0; i < obstacleGrid.length; i++) {
        let column = obstacleGrid[i];
        for (let j = 0; j < column.length; j++) {
            let row = column[j];
            if (column[j] === 1) column[j] = 0;
            else if (i == 0 && j == 0) obstacleGrid[0][0] = 1;
            else column[j] = (i > 0 ? obstacleGrid[i - 1][j] : 0) + (j > 0 ? obstacleGrid[i][j - 1] : 0)
        }
    }
    
    return obstacleGrid[obstacleGrid.length -1][obstacleGrid[0].length-1]
};