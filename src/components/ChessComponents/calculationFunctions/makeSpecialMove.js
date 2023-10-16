//COPY OF SIMPLE MOVE TODO: CHANGE THIS:

export default function makeSpecialMove(start, end, board) {
  let specialX;
  let specialY;

  // start.y indicates if it's a king, en passant pawn
  console.log("start.y:", start.y)
  // console.log("start.y:", start.y)
  if (start.y === 4) {
    specialX = end.x;
    specialY = end.y + 1;
  } else if (start.y === 3) {
    specialX = end.x;
    specialY = end.y - 1;
  } else if (start.y === 0) {
    if (end.x === 2) {
      specialX = 0;
      specialY = 0;
    } else {
      specialX = 7;
      specialY = 0;
    }
  } else if (start.y === 7) {
    if (end.x === 2) {
      specialX = 0;
      specialY = 7;
    } else {
      specialX = 7;
      specialY = 7;
    }
  }
  console.log(
    `Making special Move: \n removing start(${start.coordinate}), end (${end.coordinate}), and special coordinates (${
      specialX}${specialY
    })`
  );
  const [boardAfterRemoval, startingPiece] = removeStartingPiece(
    board,
    start,
    specialX,
    specialY
  );
  const newBoard = replaceDestination(boardAfterRemoval, startingPiece, end);

  return newBoard;
} //end simpleMove Function

// map over board, set start to null return [board, piece name]
function removeStartingPiece(board, start, specialX, specialY) {
  // console.log("THIS IS board:", board);
  let movingPiece;
  const boardAfterRemoval = board.map((sq) => {
    if (sq.coordinate === start.coordinate || (sq.x === specialX && sq.y === specialY)) {
      //starting piece has been found call it movingPiece
      movingPiece = sq.piece;
      //assign coordinate of movingPiece to null
      return {
        ...sq,
        piece: null,
      };
    }
    return sq;
  });

  return [boardAfterRemoval, movingPiece];
} //end removeStartingPiece

// map over board, replace end coordinate with the piece that is moving.
function replaceDestination(board, startingPiece, end) {
  //assign 'movingPiece' to ending coordinate
  const newBoard = board.map((sq) => {
    if (sq.coordinate === end.coordinate) {
      //TODO: mark as captured, move off board (even if null? make it easy)
      return {
        ...sq,
        piece: startingPiece,
      };
    }
    return sq;
  });
  // this test was used to check moving from 'a1' to 'b1' the first two items in array.
  // console.log("changes made?", movingPiece ,moveToEnd[0],moveToEnd[1])

  return newBoard;
}
