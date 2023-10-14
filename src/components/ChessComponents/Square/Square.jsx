// import getPiece from "../../modules/getPiece";
import { useDispatch, useSelector } from "react-redux";
import { useLegalMoves } from "../../../hooks/useLegalMoves";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
import "./Square.css";

export default function Square({ id }) {
  const dispatch = useDispatch();
  const { getLegalMoves } = useLegalMoves();

  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);
  const gameMode = useSelector((store) => store.gameMode);
  const isWhiteTurn = useSelector((store) => store.isWhiteTurn);
  const legalMoves = useSelector((store) => store.legalMoves);
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const highlightLast = useSelector((store) => store.highlightLast);
  const showLegalMoves = useSelector((store) => store.showLegalMoves);

  const square = board[id];

  const legalPlayClick = () => {
    const noSelectedPiece = selectedPiece.coordinate === "";
    const clickedAPiece = square.piece !== null;

    if (noSelectedPiece) {
      if (clickedAPiece) {
        const isWhite = square.piece[0] === "w";
        if ((isWhiteTurn && isWhite) || (!isWhiteTurn && !isWhite))
          dispatch({
            type: "SELECT_PIECE",
            payload: {
              square: square,
              validMoves: getLegalMoves(square),
            },
          });
      }
    } else {
      if (square !== selectedPiece) {
        const foundLegalMove = legalMoves.filter(
          (move) => square.coordinate === move.coordinate
        );
        // tryToMakeMove(foundLegalMove, selectedPiece,square)
        if (foundLegalMove.length === 1) {
          const start = selectedPiece.coordinate;
          const end = square.coordinate;
          dispatch({
            type: "MAKE_MOVE",
            payload: {
              newBoard: makeSimpleMove(start, end, board),
              move: start + end,
              gameLog: gameLog,
            },
          });
          // if the second sq clicked is null skip this, and just deselect
        } else if (square.piece !== null) {
          dispatch({
            type: "SELECT_PIECE",
            payload: {
              square: square,
              validMoves: getLegalMoves(square),
            },
          });
        }
      }
      dispatch({ type: "DESELECT_PIECE" });
    }
  };

  const freePlayClick = () => {
    const noSelectedPiece = selectedPiece.coordinate === "";
    const clickedAPiece = square.piece !== null;
    // console.log("Free play MODE");
    if (noSelectedPiece) {
      if (clickedAPiece) {
        dispatch({ type: "SELECT_PIECE", payload: { square: square } });
      }
    } else {
      const start = selectedPiece.coordinate;
      const end = square.coordinate;
      dispatch({
        type: "MAKE_MOVE",
        payload: {
          newBoard: makeSimpleMove(start, end, board),
          move: start + end,
          gameLog: gameLog,
        },
      });
    }
  };

  //create classes for styling squares
  //basic black or white
  let squareClass = `square ${square.isBlack ? "black" : "white"}`;
  //highlight selected piece
  if (square.coordinate === selectedPiece.coordinate) {
    squareClass += " selected";
  }
  //highlight legal moves
  if (showLegalMoves) {
    for (let sq of legalMoves) {
      if (square.coordinate === sq.coordinate) {
        squareClass += " legalMove";
      }
    }
  }
  //highlight last move
  if (
    square.coordinate === highlightLast[0] ||
    square.coordinate === highlightLast[1]
  ) {
    squareClass += " highlightLast";
  }

  const handleClick = gameMode === 0 ? freePlayClick : legalPlayClick;
  return (
    <>
      <div className={squareClass} onClick={handleClick}>
        <Coordinate coordinate={square.coordinate} />
        <Image key={`img${square.id}`} piece={square.piece} />
      </div>
    </>
  );
}
