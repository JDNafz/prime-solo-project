import { useSelector } from "react-redux";
// import { useKnight } from "./useKnight";
// import { usePawn } from "./usePawn";
// import { useRook } from "./useRook";
// import { useBishop } from "./useBishop";
// import { useQueen } from "./useQueen";

export function useKing() {
  // const { getPawnMoves } = usePawn();
  // const { getRookMoves } = useRook();
  // const { getKnightMoves } = useKnight();
  // const { getBishopMoves } = useBishop();
  // const { getQueenMoves } = useQueen();
  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);

  function getKingMoves(sP) {
    // console.log("Searching for valid Knight Moves");
    const kingColor = sP.piece[0];

    const king8 = [
      [sP.x - 1, sP.y - 1],
      [sP.x - 1, sP.y],
      [sP.x - 1, sP.y + 1],
      [sP.x, sP.y + 1],
      [sP.x + 1, sP.y + 1],
      [sP.x + 1, sP.y],
      [sP.x + 1, sP.y - 1],
      [sP.x, sP.y - 1],
    ];
    const king8Squares = board.filter((sq) => {
      for (let coordinates of king8) {
        if (coordinates[0] === sq.x && coordinates[1] === sq.y) {
          return sq;
        }
      }
    });

    let castleMoves = [];
    if (!kingHasMoved(sP, board, gameLog)) {
      if (!rookHasMoved(sP, board, gameLog, "a")) {
        castleMoves.push(aRookCastle(sP));
      }
      if (!rookHasMoved(sP, board, gameLog, "h")) {
        castleMoves.push(hRookCastle(sP))
      }
    }
    const validMoves = king8Squares;

    return [validMoves, castleMoves];
  }
  return { getKingMoves };
}

function kingHasMoved(board, gameLog) {
  return false;
}

function getAllAttacks(board, kingColor) {
  const oppositePieces = board.filter((sq) => {
    if (sq.piece !== null) {
      if (kingColor !== sq.piece[0]) {
        return sq;
      }
    }
  });

  const attacked = [];
  for (let sq of oppositePieces) {
    attacked.push(getLegalMoves(sq));
  }
  console.log(attacked);
  // for (let sq of oppositePieces){
  //   console.log( sq.piece)
  // }
}