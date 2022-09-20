
	// Javascript program to find number of possible moves of knight
	
    // Asking user for position of knight
	let n:number = 8;
	let m:number = 8;
	
	// To calculate possible moves
	function findPossibleMoves(mat:any, p:number, q:number):any
	{
		// All possible moves of a knight
		let X:any = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
		let Y:any = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

		let count:number = 0;

		// Check if each possible move is valid or not
		for (let i:number = 0; i < 8; i++) {

			// Position of knight after move
			let x:number = p + X[i];
			let y:number = q + Y[i];

			// count valid moves
			if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
				count++;
		}

		// Return number of possible moves
		return count;
	}
	
	let mat:any =    
[   [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0]
];