// import { useKnight } from "./useKnight";
import { useKnight } from "./useKnight";
import { usePawn } from "./usePawn";
import { useRook } from "./useRook";
import { useBishop } from "./useBishop";
import { useQueen } from "./useQueen";
//this function runs when a square is clicked in square.jsx(handleClick)
export function useLegalMoves() {
  const { getPawnMoves } = usePawn();
  const { getRookMoves } = useRook();
  const { getKnightMoves } = useKnight();
  const { getBishopMoves } = useBishop();
  const { getQueenMoves } = useQueen();

  const getLegalMoves = (square) => {
    // const pieceMoves = {
    //   "p": getPawnMoves(square),
    //   "r": getRookMoves(square),
    //   "n": getPawnMoves(square),
    //   "b": getPawnMoves(square),
    //   "q": getPawnMoves(square),
    //   "k": getPawnMoves(square),
    // };


    const piece = square.piece.slice(1,2);
    // console.log("PIECE:", piece);
    

    if (piece === "p"){
      return getPawnMoves(square);
    } else if( piece === 'r'){
      return getRookMoves(square);
    } else if( piece === 'n'){
      return getKnightMoves(square);
    } else if ( piece === 'b'){
      return getBishopMoves(square);
    } else if ( piece === 'q') {
      return getQueenMoves(square);
      // or skip the file and use the following:
      return [...getRookMoves(square),...getBishopMoves(square)]

    }
    return getPawnMoves(square)
    

    // return pieceMoves[piece];
  };
  return { getLegalMoves };
}
