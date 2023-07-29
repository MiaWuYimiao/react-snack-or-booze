function unroll(squareArray) {
    const n = squareArray.length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; //right, down, left, up
    const unrollArray = [];

    let visited = Array(n).fill(null).map((i) => Array(n).fill(false));
    let x=0, y=0;
    let dir = dirs[0];
    while(x<n && x>=0 && y>=0 && y<n && visited[x][y] === false) {
        unrollArray.push(squareArray[x][y]);
        visited[x][y] = true;
        if(dir[0] === 0 && dir[1] === 1 && (y+1>=n || visited[x][y+1])) dir = dirs[1];
        else if(dir[0] === 1 && dir[1] === 0  && (x+1>=n || visited[x+1][y])) dir = dirs[2];
        else if(dir[0] === 0 && dir[1] === -1  && (y-1<0 || visited[x][y-1])) dir = dirs[3];
        else if(dir[0] === -1 && dir[1] === 0  && (x-1<0 || visited[x-1][y])) dir = dirs[0];
        console.log(dir, y, n);
        x += dir[0];
        y += dir[1];
    }

    return unrollArray;
}

module.exports = unroll;
