import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {

    // console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        console.log(selectedPlayers);
        const filterPlayer = selectedPlayers.filter(selectedplayer => selectedplayer.name != player.name);
        console.log(filterPlayer);
        setSelectedPlayers(filterPlayer)
        setCoin(coin + player.price);
    }

    return (
        <div>
            <div className='space-y-4'>
            {
                selectedPlayers.map((player, index) => {
                    return <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
                        <div className='flex items-center gap-6'>
                            <img className='w-auto rounded-md' src={player.image} alt={player.name} />
                            <div>
                                <h2 className='flex items-center gap-3 font-semibold text-3xl'><FaRegUser></FaRegUser>{player.name}</h2>
                                <p>{player.type}</p>
                            </div>
                        </div>
                        <button className='btn text-red-500' onClick={()=> handleDeleteSelectedPlayer(player)}><MdDelete></MdDelete></button>
                    </div>
                })
            }
        </div>
        </div>
    );
};

export default SelectedPlayers;