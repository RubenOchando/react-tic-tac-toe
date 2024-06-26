import { useState } from 'react';
import './index.css';
import './components/Player';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import GameOver from './components/GameOver.jsx';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0  && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer
}

function deriveGameBoard(gameTurns){  
  let gameBoard = [...initialGameBoard.map(array => [...array])]; 

  for(const turn of gameTurns){

      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }
  return gameBoard;

}

function deriveWinner(gameBoard, players){
  let winner= null;

  for (const combination of WINNING_COMBINATIONS){

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
       firstSquareSymbol === secondSquareSymbol && 
       firstSquareSymbol === thirdquareSymbol
      ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner
}

function App() {
  const [players, setPlayers] =  useState({
    'X': 'Player1',
    'O' : 'Player2'
  })
  const [gameTurns, setGameTurns] = useState([]);


  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex){
    

    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex }, player: currentPlayer },
         ...prevTurns,
        ];
        return updatedTurns;
    });



    
  }

  function handleRestart (){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayer => {
      return{
        ...prevPlayer,
        [symbol]: newName
      };

    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player 
          initialName="Player1" 
          symbol="X" 
          isActive={activePlayer === 'X'} 
          onChangeName={handlePlayerNameChange}  
          />
        <Player 
          initialName="Player2" 
          symbol="O" 
          isActive={activePlayer === 'O'}
          onChangeName={handlePlayerNameChange}  
        />
         
        </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} board={gameBoard}/>
      </div>

      <Log turns={gameTurns}/>

    </main>

  )
}

export default App
