import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playerPromise }) => {
    // console.log(playerPromise);
    const players = use(playerPromise);
    // console.log(data);

    const [selectedType, setSelectedType] = useState("available");

    return (
        <div className="container mx-auto">

            <div className='flex justify-between items-center m-6'>
                {selectedType==="available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Player (4/6)</h2> }
                <div className=''>
                    <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#E7FE29]": "" } rounded-l-none`}>
                        Available
                    </button>
                    <button onClick={()=> setSelectedType("selected")}  className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]": ""}  rounded-r-none`}>Selected(0)</button>
                </div>
            </div>

            {selectedType==="available" ? <AvailablePlayers players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;