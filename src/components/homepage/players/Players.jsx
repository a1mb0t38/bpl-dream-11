import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
    // console.log(playerPromise);
    const players = use(playerPromise);
    // console.log(data);

    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className="container mx-auto">

            <div className='flex justify-between items-center m-6'>
                {selectedType==="available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Player ({selectedPlayers.length}/{players.length})</h2> }
                <div className=''>
                    <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#E7FE29]": "" } rounded-l-none`}>
                        Available
                    </button>
                    <button onClick={()=> setSelectedType("selected")}  className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]": ""}  rounded-r-none`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedType==="available" ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}></SelectedPlayers>}
        </div>
    );
};

export default Players;