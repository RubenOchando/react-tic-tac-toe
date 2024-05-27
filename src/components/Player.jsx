import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {

    const [playerName, setPlayerName]=useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
        console.log('selectedButton == true');
    }

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }

    let editableplayerName = <span className='player-name'>{playerName}</span>;

    let btnCaption ='Edit'

    if (isEditing){
        editableplayerName =<input require placeholder={initialName} defaultValue={playerName} onChange={handleChange}/>
        btnCaption='Save'
    }

    return (

        <div>


            <li className={isActive ? 'active': undefined}>
                <span className='player'></span>
                {editableplayerName}
                <span className='player-symbol'>{symbol}</span>
                <button onClick={() => handleClick(true)}>{btnCaption}</button>
            </li>
        </div>

    );
}