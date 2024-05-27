import { useState } from 'react';
import './index.css';
import './components/Player';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    const [gameTurns, setGameTurns]= usestate([]);
    
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns();
    
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
         
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      <Log></Log>

    </main>

  )
}

export default App
