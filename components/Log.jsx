export default function Log({turns, move, children}) {
  

    return(
    <ol id="log">
    <h1>Logs</h1>
        {turns.map((turn, move) => (
           
            <li key={move}>
                <ol>
                    <h3>{turn.player} selected {turn.square.row},{turn.square.col} </h3>
                </ol>
            </li>
        ))}
    </ol>

    );
}