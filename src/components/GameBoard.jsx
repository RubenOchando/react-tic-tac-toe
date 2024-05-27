import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

    const[gameBoard, setGameBoard] = useState(initialGameBoard);
 
    function handleSelectSquare(rowIndex, colIndex){
        console.log(colIndex);
        console.log(rowIndex);
        console.log(gameBoard);
        setGameBoard((prevGameBoard) => {
            const updateBoard= [...prevGameBoard.map((item) => [...item])];
            updateBoard[rowIndex][colIndex] = activePlayerSymbol
           // console.log("prevGameBoard");
           // console.log(updateBoard);
            return updateBoard;
        });   
            //console.log("gameBoard");
            //console.log(gameBoard);
        //return gameBoard;
   /*
        gameBoard((prevGameBoard)=>{
            const updateBoard =[...prevGameBoard.map(innerArray => [...innerArray])];
            
            updateBoard[rowIndex][colIndex] = 'X';

            return updateBoard;

        });
*/

        onSelectSquare();

    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>
    )
}