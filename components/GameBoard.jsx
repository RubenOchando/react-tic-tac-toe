//import { useState } from "react";



export default function GameBoard({onSelectSquare, board}) {
    // Declare a state variable to track if the button is disabled
  



    
    /*
    const[gameBoard, setGameBoard] = useState(initialGameBoard);

    add activePlayerSymbol to the props
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

        gameBoard((prevGameBoard)=>{
            const updateBoard =[...prevGameBoard.map(innerArray => [...innerArray])];
            
            updateBoard[rowIndex][colIndex] = 'X';

            return updateBoard;

        });


        onSelectSquare();

    }
        */



    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => ( 
                            
                            <li key={colIndex}>
                                <button 
                                    onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                    className={playerSymbol !== null ?  'disabled-button' : ''}

                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>
    );
}