//import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, turns}) {
    // Declare a state variable to track if the button is disabled
  

    let gameBoard = initialGameBoard;  
    for(const turn of turns){

        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col]=player;
    }


    
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
            {gameBoard.map((row, rowIndex) => (
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