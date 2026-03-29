import React, { useState } from 'react';
import { FaFlag, FaUser } from "react-icons/fa";

const Cards = ({player, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);


    const handleChoosePlayer = () => {

            let newCoin =  coin - player.price;
            if(newCoin >= 0 ){
                setCoin(coin - player.price);
            }else{
                alert("not enough coin to purchase this player");
                return;
            }

            alert(`${player.name} is selected`)
            setIsSelected(true);

            setSelectedPlayers([...selectedPlayers, player])
            
            
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='rounded-2xl w-full'
                        src={player.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><FaUser />
                        {player.name}</h2>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <FaFlag></FaFlag>
                            <p>{player.country}</p>
                        </div>
                        <button className='btn'>{player.type}</button>
                    </div>
                    <div className='divider'></div>

                    <h2 className='font-bold'>Rating: {player.rating}</h2>
                    <div className='flex justify-between gap-4 font-bold'>
                        <p>{player.battingStyle} </p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: ${player.price}</p>
                        <button onClick={handleChoosePlayer}   disabled={isSelected ? true : false} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;